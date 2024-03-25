/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let tempArr = []

    for (let i = 0; i < arr.length; i++) {
        tempArr.push(arr[i])
        if (arr[i] === 0) {
            tempArr.push(arr[i])
        }
    }

    for (let i =0; i < arr.length; i++) {
        arr[i] = tempArr[i]
    }

    return arr
    
};

// big O time = O(N)
// big O space = O(N)