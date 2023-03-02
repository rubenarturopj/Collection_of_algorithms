/*
    Write a recursive function called FIB which accepts a number and returns it's index number 
    in the Fibonacci sequence. 
    Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...
          number/index: 0  1  2  3  4  5  6   7  8   9   10  11   12   13
*/

function fib(n) {
    // If there are less than two numbers, then return the same back i.e. 1
    // Else recursive call to the numbers
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(9)); // 34
console.log(fib(10)); // 55
console.log(fib(11)); // 89
console.log(fib(12)); // 144
console.log(fib(13)); // 233
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
