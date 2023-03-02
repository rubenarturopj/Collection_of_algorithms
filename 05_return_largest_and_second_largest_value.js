//  Return the largest and the second largest value

const myArray = [17, 15, 39, 51, 14, 32, 28];
const notebook = [10, 399, 5, 7, 50, 2, 400, 32, 40];

function getThemNumbers(array) {
    const largestAndSecondlargest = [];

    let largest = array.sort(function (a, b) {
        return b - a;
    })[0];

    let secondLargest = array.sort(function (a, b) {
        return b - a;
    })[1];

    largestAndSecondlargest.push(largest, secondLargest);

    return largestAndSecondlargest;
}

console.log(getThemNumbers(myArray));
console.log(getThemNumbers(notebook));
