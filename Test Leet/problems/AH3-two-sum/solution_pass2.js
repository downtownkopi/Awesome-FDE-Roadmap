/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const remainder = target - nums[i];
        if (map.has(remainder)) return [i, map.get(remainder)];
        map.set(nums[i], i);
    }
};

module.exports = { twoSum };
