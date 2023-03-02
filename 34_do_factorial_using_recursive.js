/*
    Create a function that does the factorial of a number (n) by using recursive.
*/

function factorial(n) {
    if (n <= 1) {
        return n;
    }

    return n * factorial(n - 1);
}

console.log(factorial(3)); // 6 = 3*2*1
console.log(factorial(4)); // 24 = 4*3*2*1
console.log(factorial(5)); // 120 = 5*4*3*2*1
console.log(factorial(6)); // 720 = 6*5*4*3*2*1
console.log(factorial(7)); // 5040 = 7*6*5*4*3*2*1
