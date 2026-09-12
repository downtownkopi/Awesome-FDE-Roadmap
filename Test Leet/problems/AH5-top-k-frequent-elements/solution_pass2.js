/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = (nums, k) => {
    const valueToCountMap = new Map();
    const countArr = new Array(nums.length + 1).fill(null).map(() => [])

    for (let i = 0; i < nums.length; i++) {
        if (!valueToCountMap.has(nums[i])) valueToCountMap.set(nums[i], 0);
        valueToCountMap.set(nums[i], valueToCountMap.get(nums[i]) + 1);
    }

    for (const [value, count] of valueToCountMap) {
        countArr[count].push(value);
    }

    return countArr.flatMap((arr) => arr).slice(-k);
};

module.exports = { topKFrequent };
