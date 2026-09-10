/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = (strs) => {
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        const arr = new Array(26).fill(0);
        const str = strs[i];

        for (let j = 0; j < str.length; j++) {
            const letterPosition = str[j].charCodeAt(0) - 97;
            arr[letterPosition] = arr[letterPosition] + 1;
        }

        const anagramCount = arr.join('');
        if (!map.has(anagramCount)) map.set(anagramCount, []);
        map.set(anagramCount, map.get(anagramCount).push(str));
    }

    return [...map.values()];
};

module.exports = { groupAnagrams };
