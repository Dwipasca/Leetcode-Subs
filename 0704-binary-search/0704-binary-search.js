// note: all the numbers in array it's already sorted asc 
// purpose: need to find the target with big O time O(log n)

// we will use binary search to solve this problem
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    // initialization 2 var left = 0 and right = nums.length - 1
    let left = 0;
    let right = nums.length - 1

    // looping as long as left value is lower or equals = right
    while (left <= right){
        // we will search what is the middle index in nums arr
        // and then we will use Math.floor to round down the calculate
        mid = left + Math.floor( (right - left) / 2)

        // if the mid value its equals with target then we will return mid
        if (nums[mid] === target) return mid

        // if the value in index mid is lower than target then 
        // we will search in right section
        if (nums[mid] < target) {
            left = mid + 1
        }else {
            // we will search in left section
            right = mid -1
        }

    }

    //if the target it's not exist in array
    return -1
};

// big O time = O(log n)
// big O space = O(1)