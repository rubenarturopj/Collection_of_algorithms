/*
    Given the array nums, for each nums[i] find out how many numbers in the array 
    are smaller than it. That is, for each nums[i] you have to count the number of 
    valid j's such that j != i and nums[j] < nums[i].
        Return the answer in an array.
*/

let smallerNumbersThanCurrent = function (nums) {
    let frequencyCounter = {};

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                if (frequencyCounter[i] === undefined) {
                    frequencyCounter[i] = 0;
                }
            }

            if (nums[i] > nums[j]) {
                if (frequencyCounter[i] === undefined) {
                    frequencyCounter[i] = 1;
                } else {
                    frequencyCounter[i] += 1;
                }
            }
            if (nums[i] < nums[j]) {
                if (frequencyCounter[i] === undefined) {
                    frequencyCounter[i] = 0;
                } else if (frequencyCounter[i] != undefined) {
                    continue;
                }
            }
        }
    }

    let frequenceArray = Object.values(frequencyCounter);
    return frequenceArray;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [4,0,1,1,3]
// explanation: 8 is greater than 4 numbers (1,2,2,3), 1 is greater than 0 numbers,
// 2 is greater than 1 number(1), 3 is greater than 3 numbers(1,2,2)
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2,1,0,3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([9, 8, 7, 6, 5, 4, 3, 2, 1])); // [8,7,6,5,4,3,2,1,0]
console.log(smallerNumbersThanCurrent([9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1])); // [11,10,9,8,7,6,5,4,0,0,0,0]
