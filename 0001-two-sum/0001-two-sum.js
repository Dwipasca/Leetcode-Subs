// we can use map to fix this issue

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // initialization a new map to hold every number in arr nums, and the index
    const map = new Map()

    for ( let i =0; i < nums.length; i++) {
        let num = nums[i]
        // e.g = target = 9 num = 7 then the calculate result will be 2
        let calculateResult = target - num
        // check if the calculate exist in map? if yes then it will return the value if not return undefined
        let indexCalculateResult = map.get(calculateResult)

        // check again if if the calculate exist in map if yes it will return true if not return false
        let isTarget = map.has(calculateResult)

        // if its true then the value on index i + indexCalculateResult it's the same with target
        if (isTarget) return [i, indexCalculateResult]

        // set the number and index in map
        map.set(num, i)
    } 
   
};

// big O time = O(N)
// big O space = O(N)