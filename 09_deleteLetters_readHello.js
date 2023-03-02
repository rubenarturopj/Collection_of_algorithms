/*  
    Enter a word. If it's possible to delete some of the letters and the word "hello" 
    remains at the end, then the output should be "Yes"; otherwise the output should be "NO".

    Big O Notation:   Time complexity: O(n), Space complexity: O(n)
*/

let sample1 = "ahhellllloou";
let sample2 = "hlelo";
let sample3 = "dfgbvfghello";
let sample4 = "dfgbvfghheellloo";
let sample5 = "dfgbvfghheelllooaeiou";

function checkMyWord(input) {
    let regex1 = /h+e+l{2,}o+\w{0,2}$/;
    if (regex1.test(input) === true) {
        return "Yes";
    } else {
        return "NO";
    }
}

console.log(checkMyWord(sample1));
console.log(checkMyWord(sample2));
console.log(checkMyWord(sample3));
console.log(checkMyWord(sample4));
console.log(checkMyWord(sample5));
