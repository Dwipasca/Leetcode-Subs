// to fix this issue we can use two pointer

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let left = 0;
    
    for (let right = 1; right < nums.length; right++) {
        // if pointer left and pointer right it's not the same
        // the increase the left value and then re assign value in arr nums with index value left = nums[right]
        if (nums[left] !== nums[right]) {
            left++;
            nums[left] = nums[right]
        }
    }
    
    return left + 1
};

// big O time = O(N)
// big O space = O(1)