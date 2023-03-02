/*
    Given an array of integers nums, sort the array in ascending order and return it.
        You must solve the problem without using any built-in functions in O(nlog(n)) 
        time complexity and with the smallest space complexity possible.
*/

// this part compares and reorders
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

//this part breaks the array in 2 (left, right) over and over,
// and then calls the merge function
function mergeSort(nums) {
    if (nums.length <= 1) return nums;
    let mid = Math.floor(nums.length / 2);
    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid));
    return merge(left, right);
}

//this part simply calls the other two function and has "nums" as input
let sortArray = (nums) => {
    return mergeSort(nums);
};

console.log(sortArray([5, 2, 3, 1])); // [1,2,3,5]
console.log(sortArray([5, 1, 1, 2, 0, 0])); // [0,0,1,1,2,5]
