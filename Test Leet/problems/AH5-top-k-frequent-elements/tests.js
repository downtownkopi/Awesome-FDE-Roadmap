const solutionFile = process.argv[2] || 'solution';
const { topKFrequent } = require(`./${solutionFile}`);

// Each case: [nums, k, expected_set]
// expected is compared as a set, since return order doesn't matter.
const CASES = [
    [[1, 1, 1, 2, 2, 3], 2, [1, 2]],
    [[1], 1, [1]],
    // k=1 must return only the single most frequent element, not every
    // element that's appeared at least once.
    [[1, 1, 1, 2], 1, [1]],
    // Must return exactly k elements, even when more than k elements
    // individually clear whatever threshold a naive approach might use.
    [[1, 1, 1, 1, 2, 2, 2, 3, 3, 4], 2, [1, 2]],
];

function run() {
    let passed = 0;
    CASES.forEach(([nums, k, expected], i) => {
        const n = i + 1;
        let result;
        try {
            result = topKFrequent([...nums], k);
        } catch (e) {
            console.log(`Case ${n}: ERROR — ${e.message}`);
            return;
        }

        const resultSet = new Set(result);
        const expectedSet = new Set(expected);
        const ok =
            Array.isArray(result) &&
            result.length === expected.length &&
            resultSet.size === expectedSet.size &&
            [...expectedSet].every((v) => resultSet.has(v));

        if (ok) passed++;
        console.log(
            `Case ${n}: ${ok ? 'PASS' : 'FAIL'} — nums=${JSON.stringify(nums)}, k=${k}, got=${JSON.stringify(result)}, expected(any order)=${JSON.stringify(expected)}`
        );
    });

    console.log(`\n${passed}/${CASES.length} passed`);
    process.exit(passed === CASES.length ? 0 : 1);
}

run();
