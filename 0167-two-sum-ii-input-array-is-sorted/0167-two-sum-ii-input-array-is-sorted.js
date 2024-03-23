// we can use two pointer to fix this issue

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let currentSum = numbers[left] + numbers[right]

        // if the current sum value is morethe target then
        // we need to move the pointer right to the left 1 step
        if (currentSum > target) {
            right--
        } 
        // if currentSum is lower than target then we need to move pointer left
        // to the right 1 step
        else if (currentSum < target) {
            left++
        } else {
            // we add + 1 for index or pointer left and right because based on the description
            // the based always start on 1 
            return [left + 1, right+1]
        }
    }
};