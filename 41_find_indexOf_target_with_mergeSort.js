/*
    You are given a 0-indexed integer array nums and a target element target.

    1. Remove all repetitions from  array  // Time O(n)
    2. sort that array with merge sort approach // Time O(n log n)
    3. find the target index with binary search approach // Time O(logn)
    4. return index of target
*/

let findTargetFromUniqueSortedArray = function (arrayOfNumbers, target) {
    function removeDuplicates(arrayOfNumbers) {
        const unique = [];

        arrayOfNumbers.forEach((element) => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });

        return unique;
    }

    let arr = removeDuplicates(arrayOfNumbers);
    // console.log(arr);

    // mergesort
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

    function mergeSort(arr) {
        if (arr.length <= 1) return arr;

        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        return merge(left, right);
    }

    let now = mergeSort(arr);

    //  Binary Search
    function binarySearch(sortedArray, key) {
        let start = 0;
        let end = sortedArray.length - 1;

        while (start <= end) {
            let middle = Math.floor((start + end) / 2);

            if (sortedArray[middle] === key) {
                return middle;
            } else if (sortedArray[middle] < key) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }
        }
        return -1; // good practice: return -1 if not found
    }

    let hello = binarySearch(now, target);
    return hello;
};

let result = findTargetFromUniqueSortedArray([1, 2, 5, 2, 3], 2);
console.log(result);
let result2 = findTargetFromUniqueSortedArray(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12],
    9
);
console.log(result2);
let result3 = findTargetFromUniqueSortedArray(
    [101.25, 78, 97, 1.123, 1859, 468, 322, 697.77, 5999.9],
    697.77
);
console.log(result3);
