/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    // initialization 2 new var left = 0, longest = 0 and a new set to hold unique values
    const set = new Set()
    let longest = 0;
    let left = 0;

    // looping as long as var i is lower than s.length 
    for (let i = 0; i < s.length; i++) {

        // if arr s with index i value it's already exist in set
        // then we will delete that value bcs its duplicate then increase var left value
        while (set.has(s[i])) {
            set.delete(s[left])
            left++
        }

        // add value to set
        set.add(s[i])

        // calculate which one is the biggest or longest string 
        // the current calculate (i - left + 1) or previous calculate 
        // and then re-assign it again to var longest
        longest = Math.max(i - left +1, longest)
    }

    return longest    
};

// big O space = O(N)
// big O time = O(N)