/*
    checkIfPalindrome(sample0)

    Determine is a string is a palindrome: true or false.

    Big O notation:  Time complexity: O(n)  Space complexity: O(n)
*/

let sample0 = "Harry Potter"; // false
let sample1 = "A man, a plan, a canal: Panama"; // true
let sample2 = "race a car"; // false
let sample3 = " "; // true
let sample4 = "Madam"; // true
let sample5 = "car"; // false
let sample6 = "ABCba"; // true
let sample7 = "1ABCba1"; // true

function checkIfPalindrome(string) {
    let regex1 = /[^a-zA-Z0-9]/g;
    let stringToLowercase = string.toLowerCase();
    let stringWithoutSymbols = stringToLowercase.replace(regex1, "");
    let stringToArray = stringWithoutSymbols.split("");
    let reversedArray = stringToArray.reverse();
    let reversedString = reversedArray.join("");
    if (string === " ") {
        return "True. A blank space is a palindrome.";
    } else if (stringWithoutSymbols === reversedString) {
        return `True. "${string}" is a palindrome.`;
    } else {
        return `False. "${string}" is not a palindrome.`;
    }
}

console.log(checkIfPalindrome(sample0));
console.log(checkIfPalindrome(sample1));
console.log(checkIfPalindrome(sample2));
console.log(checkIfPalindrome(sample3));
console.log(checkIfPalindrome(sample4));
console.log(checkIfPalindrome(sample5));
console.log(checkIfPalindrome(sample6));
console.log(checkIfPalindrome(sample7));
