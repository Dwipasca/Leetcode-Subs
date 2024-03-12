
// to solve this problem we use stack
// note: to implement stack in javascript we can use array

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    // declare an empty arr
    // this arr will hold all the numbers not include the operators
    const stack = []
   
    //note: if its divider or subtraction we need to reverse the calculate
    // for example a - b => b - a
    
    // looping every values on tokens
    for (let char of tokens) {
        let sum = 0;
        if (char === "+") {
            sum = stack.pop() + stack.pop()
            stack.push(sum)
        } else if (char === "-"){
            let number1 = stack.pop()
            let number2 = stack.pop()
            sum = number2 - number1
            stack.push(sum)
        }else if (char === "*") {
            sum = stack.pop() * stack.pop()
            stack.push(sum)
        }else if (char === "/") {
            // for devider operator we will Math.trunc to remove any fractional digits
            let number1 = stack.pop()
            let number2 = stack.pop()
            sum = number2 / number1
            stack.push(Math.trunc(sum))
        }else {
            // if its not operators then we will add it into stack
            // but before that we will make sure the type change into number
            stack.push(Number(char))
        }
    }

    return stack.pop()
    
};

// big O time = O(N)
// big O space = N(N)