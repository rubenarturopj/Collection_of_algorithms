//  Read a positive number and determine whether it is prime or not.

function isPrime(number) {
    if (number === 1) {
        return "Neither Prime nor composite number";
    } else if (number === 2 || number === 3 || number === 5 || number === 7) {
        return "Prime";
    } else if (
        number % number === 0 &&
        number % 1 === 0 &&
        number % 2 !== 0 &&
        number % 3 !== 0 &&
        number % 5 !== 0
    ) {
        return "Prime";
    } else {
        return "Not prime";
    }
}

const test1 = isPrime(11);
console.log(test1);
