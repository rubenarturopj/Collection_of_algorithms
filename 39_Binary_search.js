/*
    BINARY SEARCH
    Find the index of number searched.
    Given an array of integers nums which is sorted in ascending order, and an 
    integer target, write a function to search target in nums. If target exists, 
    then return its index. Otherwise, return -1.
        You must write an algorithm with O(log n) runtime complexity.
*/

function binarySearch(nums, key) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === key) {
            return middle;
        } else if (nums[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1; // good practice: return -1 if not found
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2)); // -1
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 0)); // 1
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 12)); // 5
