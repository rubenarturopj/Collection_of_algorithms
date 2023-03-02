var smallerNumbersThanCurrent = function (nums) {
    let { length } = nums;
    let result = Array(length).fill(0);
    // Parse through the nums, for each value in the index, its compared with
    // the rest of the values in array.
    // If there is a number greater than the compared number, then the result
    // value is increased by 1.
    // The result is marked with the index, i.e. after the iteration based on
    // comparison , the value is placed in the result under the same index as
    // that of the compared number.

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; ++j) {
            if (i !== j && nums[i] > nums[j]) {
                ++result[i];
            }
        }
    }
    return result;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2,1,0,3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([9, 8, 7, 6, 5, 4, 3, 2, 1])); // [8,7,6,5,4,3,2,1,0]
console.log(smallerNumbersThanCurrent([9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1])); // [11,10,9,8,7,6,5,4,0,0,0,0]
