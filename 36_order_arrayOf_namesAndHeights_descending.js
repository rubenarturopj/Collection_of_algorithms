/*
    You are given an array of strings names, and an array heights that consists 
    of distinct positive integers. Both arrays are of length n.
    For each index i, names[i] and heights[i] denote the name and height of the ith person.
    Return names sorted in descending order by the people's heights.
*/

let sortPeople = function (names, heights) {
    let array1 = [];
    let array2 = [];
    // if there is just one element, then that's it
    if (names.length === 1) {
        return names;
    }
    // pushing an array to array1, for each item of names
    for (let i = 0; i < names.length; i++) {
        array1.push([names[i], heights[i]]);
    }
    // sorting by the element in index 1
    array1.sort((a, b) => b[1] - a[1]);
    // push the name value from array in array1 to the array2
    for (let [name, height] of array1) {
        array2.push(name);
    }

    return array2;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170])); // ["Mary","Emma","John"]
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150])); // ["Bob","Alice","Bob"]
console.log(
    sortPeople(
        ["Churro", "Taco", "Torta", "Burrito", "Enchilada"],
        [190, 200, 155, 185, 150]
    )
); // [ 'Taco', 'Churro', 'Burrito', 'Torta', 'Enchilada' ]
