/*
    Check if a number is a palindrome or not

    Big O notation:  Time complexity: O(n)  Space complexity: O(n)
*/

let sample1 = 151; // true
let sample2 = 22; // true
let sample3 = -22; // false
let sample4 = 75257; // true
let sample5 = 9257823; // false

function checkIfPalindrome(number) {
    let numberToString = number.toString();
    let stringToArray = numberToString.split("");
    let reversedArray = stringToArray.reverse();
    let reversedString = reversedArray.join("");
    if (numberToString === reversedString) {
        return `True. The number "${number}" is a palindrome.`;
    } else {
        return `False. The number "${number}" is not a palindrome.`;
    }
}
console.log(checkIfPalindrome(sample1));
console.log(checkIfPalindrome(sample2));
console.log(checkIfPalindrome(sample3));
console.log(checkIfPalindrome(sample4));
console.log(checkIfPalindrome(sample5));
console.log(checkIfPalindrome(-5039182));
