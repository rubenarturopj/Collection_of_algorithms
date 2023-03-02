/*
    Frequency Counter - sameFrequency / same numbers
    Given two positive integers, find out if the two numbers have the same frequency of digits.
    If they have the same numbers even if they're in a different order.
    Your solution MUST have the following complexities: Time: O(N)
*/

function sameFrequency(num1, num2) {
    // Convert num1 and num2 into arrays
    let arr1 = Array.from(String(num1), Number);
    let arr2 = Array.from(String(num2), Number);

    // Sort each array and convert it back into the two numbers
    arr1.sort(function (a, b) {
        return a - b;
    });

    let arrayOfNumbers = arr1.toString();

    arr2.sort(function (a, b) {
        return a - b;
    });
    let arrayOfNumbers2 = arr2.toString();

    // return if both the numbers are equal or not which indicates it has the same frequence or not
    return arrayOfNumbers === arrayOfNumbers2;
}
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
