/*
    Given a non-negative integer c, decide whether there are two integers a and b 
    such that a2 + b2 = c.

    Input: c = 5    Output: true     Explanation: 1 * 1 + 2 * 2 = 5
    Input: c = 3    Output: false
*/

////////////////////////////////////////////////////
// the number 0 zero doesnt count for my function //
////////////////////////////////////////////////////

var judgeSquareSum = function (c) {
    for (let i = c; i > 0; i--) {
        for (let j = 1; j <= i; j++) {
            let squareSum = i * i + j * j;
            if (squareSum == c) return true;
        }
    }
    return false;
};

console.log(judgeSquareSum(5)); // true
console.log(judgeSquareSum(3)); // false
console.log(judgeSquareSum(4)); // false
console.log(judgeSquareSum(8)); // true
console.log(judgeSquareSum(13)); // true
