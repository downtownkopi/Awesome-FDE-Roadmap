/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
    const set = new Set();

    for (let index = 0; index < nums.length; index++) {
        if (set.has(nums[index])) return true;
        set.add(nums[index]);
    }

    return false;
};

module.exports = { containsDuplicate };
