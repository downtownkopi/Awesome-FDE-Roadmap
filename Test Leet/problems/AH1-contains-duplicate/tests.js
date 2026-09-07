const solutionFile = process.argv[2] || 'solution';
const { containsDuplicate } = require(`./${solutionFile}`);

// Each case: [nums, expected]
const CASES = [
    [[1, 2, 3, 1], true],
    [[1, 2, 3, 4], false],
    [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true],
];

function run() {
    let passed = 0;
    CASES.forEach(([nums, expected], i) => {
        const n = i + 1;
        let result;
        try {
            result = containsDuplicate([...nums]);
        } catch (e) {
            console.log(`Case ${n}: ERROR — ${e.message}`);
            return;
        }

        const ok = result === expected;
        if (ok) passed++;
        console.log(`Case ${n}: ${ok ? 'PASS' : 'FAIL'} — nums=${JSON.stringify(nums)}, got=${result}, expected=${expected}`);
    });

    console.log(`\n${passed}/${CASES.length} passed`);
    process.exit(passed === CASES.length ? 0 : 1);
}

run();
