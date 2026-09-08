import { readFileSync } from 'node:fs';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

function loadCustomers() {
    const raw = readFileSync(new URL('./customers.csv', import.meta.url), 'utf-8');
    const [header, ...rows] = raw.trim().split('\n');
    const cols = header.split(',');
    return rows.map((row) => {
        const values = row.split(',');
        return Object.fromEntries(cols.map((c, i) => [c, values[i]]));
    });
}

const customers = loadCustomers();

const server = new McpServer({ name: 'legacy-customers', version: '1.0.0' });

server.registerTool(
    'get_customer',
    {
        title: 'Get customer by ID',
        description:
            'Look up a single customer by numeric ID. Returns the full record ' +
            '(id, name, plan, signup_date), or an error if no customer has that ID.',
        inputSchema: {
            id: z.number().int().describe('Customer ID to look up (integer).'),
        },
        outputSchema: {
            id: z.number().int(),
            name: z.string(),
            plan: z.enum(['free', 'pro', 'enterprise']),
            signup_date: z.string(),
        },
    },
    async ({ id }) => {
        const match = customers.find((c) => Number(c.id) === id);
        if (!match) {
            return {
                content: [{ type: 'text', text: `No customer found with id ${id}.` }],
                isError: true,
            };
        }
        const record = { ...match, id: Number(match.id) };
        return {
            content: [{ type: 'text', text: JSON.stringify(record) }],
            structuredContent: record,
        };
    },
);

server.registerTool(
    'search_customers',
    {
        title: 'Search customers',
        description:
            'Search customers by one field: "name" (case-insensitive substring match) ' +
            'or "plan" (exact match against free/pro/enterprise). Returns all matching ' +
            'records, or an empty list if none match. Does not search by id or ' +
            'signup_date — use get_customer for ID lookups.',
        inputSchema: {
            field: z.enum(['name', 'plan']).describe('Field to search: "name" or "plan".'),
            value: z.string().describe(
                'Value to search for. For field="name": any substring, case-insensitive. ' +
                'For field="plan": must be exactly one of free, pro, enterprise.',
            ),
        },
        outputSchema: {
            results: z.array(z.object({
                id: z.number().int(),
                name: z.string(),
                plan: z.enum(['free', 'pro', 'enterprise']),
                signup_date: z.string(),
            })),
            count: z.number().int(),
        },
    },
    async ({ field, value }) => {
        const matches = customers.filter((c) => {
            if (field === 'plan') return c.plan === value;
            return c.name.toLowerCase().includes(value.toLowerCase());
        }).map((c) => ({ ...c, id: Number(c.id) }));
        const result = { results: matches, count: matches.length };
        return {
            content: [{ type: 'text', text: JSON.stringify(result) }],
            structuredContent: result,
        };
    },
);

const transport = new StdioServerTransport();
await server.connect(transport);
