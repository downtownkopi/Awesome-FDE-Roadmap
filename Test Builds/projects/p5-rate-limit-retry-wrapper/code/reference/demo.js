const { callWithRetry } = require('./wrapper');
const { makeFloodMock } = require('../mock-api');

async function main() {
    console.log('Simulating a 429 flood: mock fails 4 times, then succeeds.\n');
    const apiCall = makeFloodMock(4, 429);

    const result = await callWithRetry(apiCall, {
        maxRetries: 6,
        baseDelayMs: 200,
        onAttempt: ({ attempt, status, retried, delayMs }) => {
            if (retried) {
                console.log(`attempt ${attempt}: got ${status}, retrying in ~${delayMs}ms`);
            } else {
                console.log(`attempt ${attempt}: got ${status}, giving up (not retryable or out of retries)`);
            }
        },
    });

    console.log(`\nFinal result: ${JSON.stringify(result)}`);
}

main();
