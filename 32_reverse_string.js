/*
    Write a recursive function called reverse which accepts a string and returns a 
    new string in reverse.
*/

function reverse(str) {
    // If the string's empty return back empty
    // else call recursive for the string without the first character and so on
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverse("awesome")); // emosewa
console.log(reverse("rithmschool")); // loohcsmhtir
console.log(reverse("a")); // a
console.log(reverse(""));

// ////////////////////////////////////////////////////////
function reverseNotRecursive(str) {
    let stringToArray = str.split("").reverse().join("");
    return stringToArray;
}

console.log(reverseNotRecursive("awesome")); // emosewa
console.log(reverseNotRecursive("rithmschool")); // loohcsmhtir
