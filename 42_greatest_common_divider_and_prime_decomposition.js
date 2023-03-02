/*
    Greatest common divider and Prime decomposition

    The greatest common divider is the greatest integer that divides two other 
    integers without remainder. For instance, the greatest common divider of 14 
    and 28 is 14, as 14 is the greatest number that divides both 14 and 28.

    The prime decomposition of a number is defined as a list of prime numbers 
    which when all multiplied together, are equal to that number.

    And prime factor is a unique members of  prime decomposition.

    Write a javascript function to do following steps:

    1. find gdc (Greatest common divider) of two numbers // Time O(n) (8 score)
    decompose found number (gdc you found for step 1) to prime roots and save it 
    2. in a unique array // Time O(n^2) (8 score).
    3. Return a object that contain a key gdcValue , value of gdc and key 
    primeFactorArray, value of section2 // Time O(1) (4 score) 
*/

// find the greatest common divider
let findGcd = (number1, number2) => {
    if (number2 == 0) {
        return number1;
    } else {
        return findGcd(number2, number1 % number2);
    }
};

// Prime factors
function prime_factors(num) {
    let primeFactors = [2];
    for (let i = 3; i <= num; i = i + 2)
        if (num % i === 0) primeFactors.push(i);
    return primeFactors.filter((prime) => num % prime === 0);
}

// Return an object that contain a key gdcValue , value of gdc and key
// primeFactorArray, value of section2

let findGcdAndDecomposeToPrimeFactors = (number1, number2) => {
    const gdcValue = findGcd(number1, number2);
    const primeFactorArray = prime_factors(gdcValue);
    return { gdcValue: gdcValue, primeFactorArray: primeFactorArray };
};

let result = findGcdAndDecomposeToPrimeFactors(14, 28); // 2,7
console.log(result);
let result1 = findGcdAndDecomposeToPrimeFactors(35, 15); // 5
console.log(result1);
let result2 = findGcdAndDecomposeToPrimeFactors(100, 180); // 2, 5
console.log(result2);
