/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = (strs) => {
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        const letterCount = new Array(26).fill(0);

        for (let j = 0; j < strs[i].length; j++) {
            const digit = strs[i][j].charCodeAt(0) - 97;
            letterCount[digit] = letterCount[digit] + 1;
        }

        const key = letterCount.join('');

        if (map.has(key)) {
            const valueArr = map.get(key);
            valueArr.push(strs[i]);
            map.set(key, valueArr);
        } else {
            map.set(key, [strs[i]]);
        }
    }

    return [...map.values()];
};

module.exports = { groupAnagrams };
