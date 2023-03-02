/*
    Given an integer array nums, return true if any value appears at least twice 
    in the array, and return false if every element is distinct.
*/

function containsDuplicates(array) {
    let isRepeated = false;
    const unique = [];

    array.forEach((element) => {
        if (!unique.includes(element)) {
            unique.push(element);
        } else {
            isRepeated = true;
            return;
        }
    });
    console.log(isRepeated);
    return;
}

containsDuplicates([1, 2, 3, 1]); // true
containsDuplicates([1, 2, 3, 4]); // false
containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]); //true
containsDuplicates([1, 1, 1, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 2, 4, 2]); //true
containsDuplicates([10, 11, 12, 13, 14, 15, 16, 17, 18]); //false
