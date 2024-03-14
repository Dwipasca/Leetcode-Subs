// note: this is arr 2 dimension, as the question state,
// each row is already sorted and the first value in row is greater than the last value

// to solved this problem we can use binary search
// first we can check or search which rows, the target pottential exist
// and after that we will use the binary search to check the value 

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    // initialization 2 variable rows = matrix.length and cols = matrix[0].length
    // this vars will use to know how much we have for 1 row and 1 column
    const rows = matrix.length;
    const cols = matrix[0].length

    //initialization 2 var top = 0 and bottom = rows -1
    // this vars will use as a pointer to selection which rows the target it's potential exist
    let top =0;
    let bottom = rows - 1

    // looping as long as value top is lower or equals with bottom value
    // we will search which rows that potential the target it's exist
    while (top <= bottom) {
        let row = Math.floor((top + bottom) / 2)

        if (target > matrix[row][cols-1]){
            top = row + 1
        }else if (target < matrix[row][0]) {
            bottom = row - 1
        } else {
            break
        }
    }

    // if after we check the rows it's not containt the target value
    // then we will immediately return false
    if (!(top <= bottom)) {
        return false
    }

    // we will use binary search to search the target on the columns 
    let midCols = Math.floor((top + bottom) / 2)
    let left = 0
    let right = cols - 1
    
    while (left <= right) {
        let midRow = Math.floor((left + right) / 2)
        if (target > matrix[midCols][midRow]){
            left = midRow + 1
        } else if (target < matrix[midCols][midRow]){
            right = midRow - 1
        } else if (target == matrix[midCols][midRow]) {
            return true
        }
    }

    return false

};

// big O time = O(log m + log n)
// big O space = O(1)