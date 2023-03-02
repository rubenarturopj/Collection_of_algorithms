//  Return the total sum of all the elements of an array

const seasonResult = [
    3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 1, 3, 1, 3, 1, 3, 1, 0, 0, 1, 3, 3, 1, 0, 0,
    1, 3, 3, 1, 0,
];

function totalPoints(array) {
    let sum = 0;
    array.forEach(summing);
    function summing(arrayElement) {
        return (sum += arrayElement);
    }
    return sum;
}
console.log(totalPoints(seasonResult)); // output:45
console.log(totalPoints([5, 5, 5])); // output:15
