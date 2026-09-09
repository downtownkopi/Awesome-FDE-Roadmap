/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = (strs) => {
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        const sorted = strs[i].split('').sort().join('');
        if (map.has(sorted)) {
            const arr = map.get(sorted);
            arr.push(strs[i]);
            map.set(sorted, arr);
        }
        else map.set(sorted, [strs[i]]);
    }

    return [...map.values()];
};

module.exports = { groupAnagrams };
