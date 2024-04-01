/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const tempObj = {}

    for (let i =0; i < nums.length; i++) {
        let num = nums[i]

        tempObj[num] = (tempObj[num] || 0) + 1
    }

    const tempArr = Object.keys(tempObj).sort((a,b) => tempObj[b] - tempObj[a])

    const frequentTopK = tempArr.slice(0, k)

    return frequentTopK

};