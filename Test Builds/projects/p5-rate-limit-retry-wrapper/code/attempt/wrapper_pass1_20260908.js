async function callWithRetry(apiCallFn, {
    maxRetries = 5,
    baseDelayMs = 200,
    maxDelayMs = 2000,
    sleepFn = (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
    onAttempt = () => { },
}) {
    let lastError;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            return await apiCallFn();
        } catch (err) {
            lastError = err;
            const retryable = err.status === 429 || (err.status >= 500 && err.status < 600);

            if (!retryable || attempt === maxRetries) {
                onAttempt({ attempt, status: err.status, retried: false });
                throw err;
            }

            const delay = Math.min(baseDelayMs * 2 ** attempt, maxDelayMs);
            const jitteredDelay = delay * (0.5 + Math.random());
            await sleepFn(jitteredDelay);
        }
    }

    throw lastError;
}

module.exports = { callWithRetry }