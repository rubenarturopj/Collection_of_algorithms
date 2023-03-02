/*
    Write Javascript function called findDifferenceMaxAndMin to return the 
    difference of the maximum and minimum values of given array of numbers.
    Hint: Time O(n), Space O(n)
*/

const findDifferenceMaxAndMin = (arr) => {
    let largest = arr.reduce((val1, val2) => {
        if (val1 > val2) {
            return val1;
        } else {
            return val2;
        }
    }, arr[0]);

    let smallest = arr.reduce((val1, val2) => {
        if (val1 > val2) {
            return val2;
        } else {
            return val1;
        }
    }, arr[0]);

    return largest - smallest;
};

let result = findDifferenceMaxAndMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]);
console.log(result);

result = findDifferenceMaxAndMin([
    101.25, 78, 97, 1.123, 1859, 468, 322, 697.77, 5999.9,
]);
console.log(result);
