const solutionFile = process.argv[2] || 'solution';
const { groupAnagrams } = require(`./${solutionFile}`);

// Each case: [strs, expectedGroups] — order of groups and order within a group don't matter.
const CASES = [
    [['eat', 'tea', 'tan', 'ate', 'nat', 'bat'], [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]],
    [[''], [['']]],
    [['a'], [['a']]],
];

// Normalize: sort each group's strings, then sort the groups by their joined key.
function normalize(groups) {
    return groups
        .map((g) => [...g].sort())
        .sort((a, b) => a.join(',').localeCompare(b.join(',')));
}

function sameGroups(a, b) {
    const na = normalize(a);
    const nb = normalize(b);
    return JSON.stringify(na) === JSON.stringify(nb);
}

function run() {
    let passed = 0;
    CASES.forEach(([strs, expected], i) => {
        const n = i + 1;
        let result;
        try {
            result = groupAnagrams([...strs]);
        } catch (e) {
            console.log(`Case ${n}: ERROR — ${e.message}`);
            return;
        }

        const ok = Array.isArray(result) && sameGroups(result, expected);
        if (ok) passed++;
        console.log(`Case ${n}: ${ok ? 'PASS' : 'FAIL'} — strs=${JSON.stringify(strs)}, got=${JSON.stringify(result)}`);
    });

    console.log(`\n${passed}/${CASES.length} passed`);
    process.exit(passed === CASES.length ? 0 : 1);
}

run();
