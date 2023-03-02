/*
    Given an integer array nums of length n where all the integers of nums are in 
    the range [1, n] and each integer appears once or twice, 
    
    return an array of all the integers that appears twice.
*/

function printDuplicates(array) {
    const unique = [];
    const repeated = [];

    array.forEach((element) => {
        if (!unique.includes(element)) {
            unique.push(element);
        } else {
            repeated.push(element);
        }
    });

    console.log(repeated);
    return;
}

printDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
printDuplicates([1, 1, 2]);
printDuplicates([1]);
