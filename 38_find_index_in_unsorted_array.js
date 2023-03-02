/*
    You are given a 0-indexed integer array nums and a target element target.
        A target index is an index i such that nums[i] === target.
            Return a list of the target indices of nums after sorting nums in 
            non-decreasing order. If there are no target indices, return an empty list. 
                The returned list must be sorted in increasing order.

    Dame el indice del numero buscado. primero tengo que reordenar el array y luego buscar
    el indice del numero indicado. Si el numero estâ repetido entonces tendra varios indices 
    y estos tienen que estar ordenados en ascenso.
*/

let targetIndices = function (nums, target) {
    let sortedArray = nums.sort((a, b) => {
        return a - b;
    });

    let newArray = [];

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === target) {
            newArray.push({ number: sortedArray[i], index: [i] });
        }
    }

    let anotherArray = newArray.map(function (obj) {
        return obj.index;
    });
    // create a new array with all sub-array elements concatenated into it recursively up
    // to the specified depth.
    let flattedArray = anotherArray.flat(1);
    return flattedArray;
};

console.log(targetIndices([1, 2, 5, 2, 3], 2)); // index [1,2]
console.log(targetIndices([1, 2, 5, 2, 3], 3)); // index [3]
console.log(targetIndices([1, 2, 5, 2, 3], 5)); // index [4]
console.log(targetIndices([1, 1, 1, 1, 2, 3], 1)); // index [0,1,2,3]

/////////////////////////////
//   version 2             //
/////////////////////////////

var targetIndices2 = function (nums, target) {
    // Sort the array
    nums.sort((a, b) => {
        return a - b;
    });
    let result = [];

    // Loop to nums and find the target
    for (let i = 0; i < nums.length; i++) {
        // If found, push the indices into result and return
        if (nums[i] == target) result.push(i);
    }

    return result;
};

console.log(targetIndices2([1, 2, 5, 2, 3], 2)); // index [1,2]
console.log(targetIndices2([1, 2, 5, 2, 3], 3)); // index [3]
console.log(targetIndices2([1, 2, 5, 2, 3], 5)); // index [4]
console.log(targetIndices2([1, 1, 1, 1, 2, 3], 1)); // index [0,1,2,3]
