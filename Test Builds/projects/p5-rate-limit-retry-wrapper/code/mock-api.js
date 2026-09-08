// Fake API for testing the wrapper without a real network call.
// Fails with `failStatus` for the first `failCount` calls, then succeeds.
function makeFloodMock(failCount, failStatus = 429) {
    let calls = 0;
    return async function mockApiCall() {
        calls++;
        if (calls <= failCount) {
            const err = new Error(`mock failure ${calls}`);
            err.status = failStatus;
            throw err;
        }
        return { status: 200, data: `success on call ${calls}` };
    };
}

// Always fails with the given status. Used to prove non-retryable errors don't retry.
function makeAlwaysFailMock(status) {
    return async function mockApiCall() {
        const err = new Error(`mock failure, status ${status}`);
        err.status = status;
        throw err;
    };
}

module.exports = { makeFloodMock, makeAlwaysFailMock };
