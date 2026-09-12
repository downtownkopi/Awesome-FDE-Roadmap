/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = (strs) => {
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        const arr = new Array(26).fill(0);
        for (let j = 0; j < str.length; j++) {
            arr[str[j].charCodeAt(0) - 97] = arr[str[j].charCodeAt(0) - 97] + 1;
        }

        const key = arr.join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }

    return [...map.values()];
};

module.exports = { groupAnagrams };
