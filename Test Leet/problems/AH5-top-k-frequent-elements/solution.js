/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = (nums, k) => {
    const letterToCountMap = new Map();
    const countToLetterMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!letterToCountMap.has(nums[i])) {
            letterToCountMap.set(nums[i], 1);

            if (!countToLetterMap.has(1)) countToLetterMap.set(1, new Set());
            const set = countToLetterMap.get(1);
            set.add(nums[i]);
            countToLetterMap.set(1, set);
        } else {
            const existingCount = letterToCountMap.get(nums[i]);
            const newCount = existingCount + 1;
            letterToCountMap.set(nums[i], newCount);

            if (!countToLetterMap.has(newCount)) countToLetterMap.set(newCount, new Set());
            const set = countToLetterMap.get(newCount);
            set.add(nums[i]);
            countToLetterMap.set(newCount, set);

            const unset = countToLetterMap.get(existingCount);
            unset.delete(nums[i]);
            countToLetterMap.set(existingCount, unset);
        }
    }

    return [...countToLetterMap.values().flatMap((set) => [...set.values()])].slice(-k);
};

module.exports = { topKFrequent };
