// can use two pointer to fix this issue

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // based on description the return it's all alphanumeric with space and all of the char is lower case
    const cleanText = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()

    let left = 0;
    let right = cleanText.length -1

    while (left < right) {
        if (cleanText[left] !== cleanText[right]) return false
        left++;
        right--;
    }
    return true
};

// big O time = O(N)
// big O space = O(N)