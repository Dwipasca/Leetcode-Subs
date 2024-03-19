// to fix this issue we can use stack

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // initialization a new obj that will hold patterns 
    // for example: key : "(" then the value will be: ")"
    const objPattern = {
        "(": ")",
        "[": "]",
        "{" : "}"
    }

    // initialization an empty stack / arr
    const stack = []

    for (let i =0; i < s.length; i++) {
        let char = s[i]
        // if the character it's exist on one of the key in objPattern ( "(" or "[" or "{" )
        // then we will add the character to stack
        if (objPattern[char]) {
            stack.push(objPattern[char])
        }
        // if the last index value in stack it's the same with character
        // then we will remove it on stack
        else if (stack[stack.length - 1] === char && stack.length > 0){
            stack.pop()
        }else {
            return false
        }
    }

    // as long as the stack length it's 0 then it will return true
    // if not then it will return false
    return stack.length === 0

};

// big O time = O(N)
// big O space = O(N)