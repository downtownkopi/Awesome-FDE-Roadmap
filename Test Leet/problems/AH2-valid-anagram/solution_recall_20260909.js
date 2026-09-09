/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; s.length; i++) {
        if (!sMap.has(s[i])) sMap.set(s[i], 0);
        sMap.set(s[i], sMap.get(s[i]) + 1);
        if (!tMap.has(t[i])) tMap.set(t[i], 0);
        tMap.set(t[i], tMap.get(t[i]) + 1);
    }

    for (const sKey of sMap.keys()) {
        if (sMap.get(sKey) !== tMap.get(sKey)) return false;
    }

    return true;
};

module.exports = { isAnagram };
