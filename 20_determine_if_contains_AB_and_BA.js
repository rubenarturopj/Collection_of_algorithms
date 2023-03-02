/*
    Determine if a string contains both "AB" and "BA" (in any order) Return: True or False.

    Big O notation:  Time complexity: O(n)  Space complexity: O(n)
*/

let sample1 = "ABBA"; // True
let sample2 = "BAAB"; // True
let sample3 = "ABA"; // False
let sample4 = "ABHA"; // False
let sample5 = "ABOOO BAZZ XYZ"; // True
let sample6 =
    "In software engineering, rubber duck debugging (or rubberducking) is a method of debugging code by articulating a problem in spoken or written natural language. The name is a reference to a story in the book The Pragmatic Programmer in which a programmer would carry around a rubber duck and debug their code by forcing themselves to explain it, line-by-line, to the duck.";
// False
let sample7 = "WATAGABITUSBERRYAB"; // False
let sample8 = "WATABATABITUSBERRY"; // True
let sample9 =
    "In software engineering-ab, rubber duck debugging (or rubberducking) is a method of debugging code by articulating a problem in spoken or written natural languageba. The name is a reference to a story in the book The Pragmatic Programmer in which a programmer would carry around a rubber duck and debug their code by forcing themselves to explain it, line-by-line, to the duck.";
// True

function findABBA(string) {
    let regex1 = /(AB.*BA|BA.*AB)/;
    let upperLetters = string.toUpperCase();
    let checkingRegex = regex1.test(upperLetters);
    return checkingRegex;
}

console.log(findABBA(sample1));
console.log(findABBA(sample2));
console.log(findABBA(sample3));
console.log(findABBA(sample4));
console.log(findABBA(sample5));
console.log(findABBA(sample6));
console.log(findABBA(sample7));
console.log(findABBA(sample8));
