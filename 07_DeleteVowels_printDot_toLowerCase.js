/*  
    1. Delete all the vowels
    2. Print a dot before each consonant.
    3. Write all the remaining consonants in lowercase.

    Big O Notation:   Time complexity: O(n), Space complexity: O(n)
*/

let sample1 = "aBAcAba";
let sample2 = "ANASTACIO CRUSTACIO Mentecacio del carmen";
let sample3 =
    "RUBBER DUCK DEBUGGING: In software engineering, rubber duck debugging (or rubberducking) is a method of debugging code by articulating a problem in spoken or written natural language. A programmer would carry around a rubber duck and debug their code by forcing themselves to explain it, line-by-line, to the duck. Many other terms exist for this technique, often involving different (usually) inanimate objects, or pets such as a dog or a cat.";

function deleteVowels(string) {
    let regex1 = /[aeiouAEIOU]/g;
    let regex2 = /([a-zA-Z])/g; // consonants remaining only(no commas or dots or parenthesis)
    let stringNoVowels = string.replace(regex1, "");
    let stringWithDots = stringNoVowels.replace(regex2, ".$1"); // $1 is capture group 1 (regex)
    let stringLowercase = stringWithDots.toLowerCase();
    return stringLowercase;
}

console.log(deleteVowels(sample1));
console.log();
console.log(deleteVowels(sample2));
console.log();
console.log(deleteVowels(sample3));
