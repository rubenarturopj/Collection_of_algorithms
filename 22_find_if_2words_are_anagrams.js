/*
    Given two strings s1 and s2, find if they are anagrams of each other.
    Strings contain lowercase(a-z) characters,uppercase characters(A-Z) and digits(0-9).
    Print "Anagram" if they are anagrams of each other,else print "Not Anagram".
    Sample Input: abc   bca   Output: Anagram
*/

/////////////////////////////////////////////////////////////////////
//     MY CODE WORKS PERFECTLY IN VSCODE BUT NOT IN HACKERRANK     //
//         MAYBE IT'S THE TYPE OF INPUT, I DON'T KNOW              //
/////////////////////////////////////////////////////////////////////
function isAnagram(strings1and2separatedbyaspace) {
    let stringsBreaker = strings1and2separatedbyaspace.split(" ");
    let string1 = stringsBreaker[0];
    let string2 = stringsBreaker[1];
    let sortedString1 = string1.toLowerCase().split("").sort().join("");
    let sortedString2 = string2.toLowerCase().split("").sort().join("");
    if (sortedString1 === sortedString2) {
        return "Anagram";
    } else {
        return "Not anagram";
    }
}

console.log(isAnagram("abc bca")); // anagram
console.log(isAnagram("cat rat")); // not anagram
console.log(isAnagram("torchwood doctorwho")); // anagram
console.log(isAnagram("angered enraged")); // anagram
console.log(isAnagram("peach cheap")); // anagram
