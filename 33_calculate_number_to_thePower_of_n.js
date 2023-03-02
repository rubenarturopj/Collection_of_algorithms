/*
    Implement  pow(x, n),  which calculates x raised to the power n (i.e., xn).
*/

function myPow(x, n) {
    // Any number to the power of 0 is 1
    if (n === 0) {
        return 1;
    }
    // The number itself is 0
    if (x === 0) return 0;

    // n is a positive number, do recursive call with power reduced by 1
    if (n > 0) {
        return x * myPow(x, n - 1);
    }

    //n is a negative number
    return (1 / x) * myPow(x, n + 1);
    // ex: -2 ----> (1/2)
}

// console.log(x, n);
console.log(myPow(2.0, 10)); // 1024.00000
console.log(myPow(2.1, 3)); // 9.26100
console.log(myPow(2.0, -2)); // 0.25000
console.log();

/////////////////////////////////
// NON RECURSIVE and with loop

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(2, 4));
