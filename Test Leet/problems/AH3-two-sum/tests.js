const solutionFile = process.argv[2] || 'solution';
const { twoSum } = require(`./${solutionFile}`);

// Each case: [nums, target, expected_indices]
// expected is compared order-independently, since the problem allows
// either index order.
const CASES = [
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 2, 4], 6, [1, 2]],
    [[3, 3], 6, [0, 1]],
];

function run() {
    let passed = 0;
    CASES.forEach(([nums, target, expected], i) => {
        const n = i + 1;
        let result;
        try {
            result = twoSum([...nums], target);
        } catch (e) {
            console.log(`Case ${n}: ERROR — ${e.message}`);
            return;
        }

        const ok =
            Array.isArray(result) &&
            result.length === 2 &&
            nums[result[0]] + nums[result[1]] === target &&
            new Set(result).size === 2;

        if (ok) passed++;
        console.log(
            `Case ${n}: ${ok ? 'PASS' : 'FAIL'} — nums=${JSON.stringify(nums)}, target=${target}, got=${JSON.stringify(result)}, expected(one valid)=${JSON.stringify(expected)}`
        );
    });

    console.log(`\n${passed}/${CASES.length} passed`);
    process.exit(passed === CASES.length ? 0 : 1);
}

run();
