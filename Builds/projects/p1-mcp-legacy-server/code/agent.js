import Anthropic from '@anthropic-ai/sdk';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

const MODEL = 'claude-sonnet-4-5';
const MAX_TURNS = 8;

async function main() {
    const prompt = process.argv[2] || 'Look up customer 3, then tell me every enterprise-plan customer.';

    // Spawn our MCP server as a subprocess, connect over stdio.
    const transport = new StdioClientTransport({ command: 'node', args: ['server.js'] });
    const mcp = new Client({ name: 'p1-agent', version: '1.0.0' });
    await mcp.connect(transport);

    // MCP tool schemas are already JSON Schema -> near-direct mapping to Anthropic's input_schema.
    const { tools: mcpTools } = await mcp.listTools();
    const tools = mcpTools.map((t) => ({
        name: t.name,
        description: t.description,
        input_schema: t.inputSchema,
    }));
    console.log(`Loaded ${tools.length} tools from MCP server: ${tools.map((t) => t.name).join(', ')}\n`);

    const anthropic = new Anthropic();
    const messages = [{ role: 'user', content: prompt }];
    console.log(`USER: ${prompt}\n`);

    for (let turn = 0; turn < MAX_TURNS; turn++) {
        const response = await anthropic.messages.create({
            model: MODEL,
            max_tokens: 1024,
            tools,
            messages,
        });

        const toolUseBlocks = response.content.filter((b) => b.type === 'tool_use');
        const textBlocks = response.content.filter((b) => b.type === 'text');
        for (const b of textBlocks) console.log(`CLAUDE: ${b.text}`);

        messages.push({ role: 'assistant', content: response.content });

        if (response.stop_reason !== 'tool_use') {
            break;
        }

        const toolResults = [];
        for (const block of toolUseBlocks) {
            console.log(`  -> calling ${block.name}(${JSON.stringify(block.input)})`);
            const result = await mcp.callTool({ name: block.name, arguments: block.input });
            // Forward `content` (guaranteed by MCP spec on every tool), not `structuredContent`
            // (only present because this server happens to define outputSchema) -- see NOTES.md.
            const textResult = result.content
                .filter((c) => c.type === 'text')
                .map((c) => c.text)
                .join('\n');
            console.log(`  <- ${textResult}`);
            toolResults.push({
                type: 'tool_result',
                tool_use_id: block.id,
                content: textResult,
                is_error: result.isError === true,
            });
        }
        messages.push({ role: 'user', content: toolResults });
    }

    await mcp.close();
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
