/*  
    Check whether a letter is uppercase (true) or not (false/not an alphabetical character)

    Big O Notation:   Time complexity: O(n), Space complexity: O(n)    
*/

function isUppercase(letter) {
    let regex1 = /^[A-Z]$/g;
    let regex2 = /^[a-zA-Z]$/g;
    if (regex2.test(letter) !== true) {
        return letter + " is not an alphabetic character.";
    }
    if (regex1.test(letter) === true) {
        return "True";
    } else {
        return "False";
    }
}

console.log(isUppercase("p"));
console.log(isUppercase("z"));
console.log(isUppercase("H"));
console.log(isUppercase("L"));
console.log(isUppercase("9"));
console.log(isUppercase("?"));
console.log(isUppercase("."));
console.log(isUppercase("/"));
