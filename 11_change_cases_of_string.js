/*
    Read a sentence and replace lowercase characters by uppercase and vice-versa.

    Big O Notation:   Time complexity: O(n), Space complexity: O(n)    
*/

let sample1 = "jASON";
let sample2 = "Ruby";
let sample3 = "HELLO world";
let sample4 = "ToMaToEs";
let sample5 = "LeT's PlAy FALL GUyS";
let sample6 =
    "this first half is now in uppercase AND THIS SECOND HALF IS NOW IN LOWERCASE.";

function replaceCases(string) {
    let newString = "";
    for (let index = 0; index < string.length; index++) {
        let temp = string[index];
        if (temp === temp.toLowerCase()) {
            temp = temp.toUpperCase();
        } else {
            temp = temp.toLowerCase();
        }
        newString += temp;
    }
    return newString;
}

console.log(replaceCases(sample1));
console.log(replaceCases(sample2));
console.log(replaceCases(sample3));
console.log(replaceCases(sample4));
console.log(replaceCases(sample5));
console.log(replaceCases(sample6));
