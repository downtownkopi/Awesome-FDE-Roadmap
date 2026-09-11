// Wraps an API call function with retry + exponential backoff + jitter.
// apiCallFn: async function, throws { status } on failure, resolves on success.
// Retries on 429 and 5xx. Does not retry on other 4xx (client error, no point retrying).
async function callWithRetry(apiCallFn, {
    maxRetries = 5,
    baseDelayMs = 200,
    maxDelayMs = 5000,
    sleepFn = (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
    onAttempt = () => {},
} = {}) {
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

            const exp = Math.min(baseDelayMs * 2 ** attempt, maxDelayMs);
            const delay = exp * (0.5 + Math.random()); // jitter: 0.5x-1.5x of exp delay
            onAttempt({ attempt, status: err.status, retried: true, delayMs: Math.round(delay) });
            await sleepFn(delay);
        }
    }

    throw lastError;
}

module.exports = { callWithRetry };
