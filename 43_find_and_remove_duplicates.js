let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
    var unique = [];
    arr.forEach((element) => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}

console.log(removeDuplicates(arr));
