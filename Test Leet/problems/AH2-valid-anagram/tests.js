const solutionFile = process.argv[2] || 'solution';
const { isAnagram } = require(`./${solutionFile}`);

// Each case: [s, t, expected]
const CASES = [
    ['anagram', 'nagaram', true],
    ['rat', 'car', false],
    ['a', 'ab', false],
];

function run() {
    let passed = 0;
    CASES.forEach(([s, t, expected], i) => {
        const n = i + 1;
        let result;
        try {
            result = isAnagram(s, t);
        } catch (e) {
            console.log(`Case ${n}: ERROR — ${e.message}`);
            return;
        }

        const ok = result === expected;
        if (ok) passed++;
        console.log(`Case ${n}: ${ok ? 'PASS' : 'FAIL'} — s=${JSON.stringify(s)}, t=${JSON.stringify(t)}, got=${result}, expected=${expected}`);
    });

    console.log(`\n${passed}/${CASES.length} passed`);
    process.exit(passed === CASES.length ? 0 : 1);
}

run();
