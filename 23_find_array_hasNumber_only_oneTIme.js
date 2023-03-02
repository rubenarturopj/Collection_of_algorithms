/*
    Given an array of integers arr, return true if the number of occurrences of each 
    value in the array is unique, or false otherwise.

    Sample Input: arr = [1,2,2,1,1,3]      Output: true
    Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. 
    No two values have the same number of occurrences.
*/

const arr = [1, 2, 2, 1, 1, 3];
const arr2 = [1, 2];
const arr3 = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
const arr4 = [3, 1, 1, 1, 2, 2, 2, 4, 4];

function uniqueOcurrences(array) {
    let obj = {};
    for (let num of array) {
        if (obj[num] === undefined) {
            obj[num] = 1;
        } else {
            obj[num] += 1;
        }
    }
    let oArray = Object.values(obj);
    return oArray.length === new Set(oArray).size;
}

console.log(uniqueOcurrences(arr)); // true
console.log(uniqueOcurrences(arr2)); // false
console.log(uniqueOcurrences(arr3)); // true
console.log(uniqueOcurrences(arr4)); // false
