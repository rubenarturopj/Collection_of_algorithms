/*  
    Rearrange the numbers in ascending order
    
    Big O Notation:   Time complexity: O(n), Space complexity: O(n)
*/

let sample1 = "1+1+3+1+3+2+3";
let sample2 = "3+3+3+2+2+2+1+1+1";
let sample3 = "2+2+1+1+3+3+1+2";

function reoderNumbers(input) {
    let regex1 = /\+/g;
    let noSigns = input.replace(regex1, "");
    let stringToArray = noSigns.split("");
    let sortMyArray = stringToArray.sort();
    let arrayToString = sortMyArray.join("+");
    return arrayToString;
}
console.log(reoderNumbers(sample1));
console.log(reoderNumbers(sample2));
console.log(reoderNumbers(sample3));
