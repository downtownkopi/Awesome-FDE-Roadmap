// Usage: node test.js [attempt|reference]  (default: attempt)
const target = process.argv[2] || 'attempt';
const { callWithRetry } = require(`./${target}/wrapper`);
const { makeFloodMock, makeAlwaysFailMock } = require('./mock-api');

// sleepFn stub: no real waiting in tests, but we record delays to check the backoff curve.
function makeFakeSleep(log) {
    return async (ms) => { log.push(ms); };
}

async function testFloodThenSuccess() {
    const delays = [];
    const attempts = [];
    const apiCall = makeFloodMock(3, 429); // fails 3 times with 429, then succeeds
    const result = await callWithRetry(apiCall, {
        maxRetries: 5,
        baseDelayMs: 100,
        sleepFn: makeFakeSleep(delays),
        onAttempt: (info) => attempts.push(info),
    });

    const ok = result.status === 200 && delays.length === 3 && delays.every((d) => d > 0);
    console.log(`testFloodThenSuccess: ${ok ? 'PASS' : 'FAIL'} — result=${JSON.stringify(result)}, delays=${JSON.stringify(delays)}`);
    return ok;
}

async function testGivesUpAfterMaxRetries() {
    const delays = [];
    const apiCall = makeFloodMock(10, 429); // never recovers within maxRetries
    let threw = false;
    let caughtStatus;
    try {
        await callWithRetry(apiCall, { maxRetries: 3, baseDelayMs: 50, sleepFn: makeFakeSleep(delays) });
    } catch (err) {
        threw = true;
        caughtStatus = err.status;
    }

    const ok = threw && caughtStatus === 429 && delays.length === 3;
    console.log(`testGivesUpAfterMaxRetries: ${ok ? 'PASS' : 'FAIL'} — threw=${threw}, delays=${JSON.stringify(delays)}`);
    return ok;
}

async function testNoRetryOn4xx() {
    const delays = [];
    const apiCall = makeAlwaysFailMock(400); // bad request, not retryable
    let threw = false;
    let caughtStatus;
    try {
        await callWithRetry(apiCall, { maxRetries: 5, baseDelayMs: 50, sleepFn: makeFakeSleep(delays) });
    } catch (err) {
        threw = true;
        caughtStatus = err.status;
    }

    const ok = threw && caughtStatus === 400 && delays.length === 0;
    console.log(`testNoRetryOn4xx: ${ok ? 'PASS' : 'FAIL'} — threw=${threw}, delays=${JSON.stringify(delays)}`);
    return ok;
}

async function testBackoffGrows() {
    const delays = [];
    const apiCall = makeFloodMock(4, 503); // 5xx also retryable
    await callWithRetry(apiCall, { maxRetries: 5, baseDelayMs: 100, sleepFn: makeFakeSleep(delays) });

    // With jitter each delay is 0.5x-1.5x of base*2^attempt, so check the floor of each step is rising.
    const floors = delays.map((d, i) => d >= 100 * 2 ** i * 0.5);
    const ok = floors.every(Boolean);
    console.log(`testBackoffGrows: ${ok ? 'PASS' : 'FAIL'} — delays=${JSON.stringify(delays)}`);
    return ok;
}

async function run() {
    const results = await Promise.all([
        testFloodThenSuccess(),
        testGivesUpAfterMaxRetries(),
        testNoRetryOn4xx(),
        testBackoffGrows(),
    ]);
    const passed = results.filter(Boolean).length;
    console.log(`\n${passed}/${results.length} passed`);
    process.exit(passed === results.length ? 0 : 1);
}

run();
