//  Return the smallest and largest number as another array

const myArray = [17, 15, 39, 51, 14, 32, 28];

function getNumbers(array) {
    const smallestLargest = [];
    let largest = array.reduce((val1, val2) => {
        if (val1 > val2) {
            return val1;
        } else {
            return val2;
        }
    }, array[0]);

    let smallest = array.reduce((val1, val2) => {
        if (val1 > val2) {
            return val2;
        } else {
            return val1;
        }
    }, array[0]);

    smallestLargest.push(smallest, largest);
    return smallestLargest;
}
console.log(getNumbers([17, 15, 39, 51, 14, 32, 28]));
console.log(getNumbers(myArray));
