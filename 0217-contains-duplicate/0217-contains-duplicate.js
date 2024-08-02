/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const obj = {}

    for (let i=0; i < nums.length; i++) {
        let num = nums[i]

        if (!obj[num]) {
            obj[num] = 1
        } else {
            return true
        }
    }

    return false

};

