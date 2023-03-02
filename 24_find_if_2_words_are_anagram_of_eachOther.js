/*
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/

let isAnagram = function (s, t) {
    //if both the strings are of uneven length, then return false
    if (s.length !== t.length) return false;

    const object1 = {};
    const object2 = {};

    // Iterate the first string and store the occurence of each alphabet in the object
    for (let i = 0; i < s.length; i++) {
        if (!object1[s[i]]) {
            object1[s[i]] = 0;
        }
        object1[s[i]]++;
    }

    // Mapping out the second string and cross checking with the first object
    // If not found then return false
    for (let j = 0; j < t.length; j++) {
        if (!object2[t[j]]) {
            object2[t[j]] = 0;
        }
        object2[t[j]]++;
    }

    // Comparing if both objects have the same keys
    for (let key in object1) {
        // a cada key del objeto 1 le vamos a revisar lo siguiente:

        if (!object2[key]) {
            //if key of object 2 is not there, return false
            return false;
        }

        if (object2[key] != object1[key]) {
            // if the key of object 2 IS indeed in object 1
            return false; // but their value is not the same, return false.
        } // (in case the letter is there but has a greater
        // or smaller frequency) por ejemplo palabras que
    } // que tengan vocales repetidas pero en diferente numero.
    return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("torchwood", "doctorwho")); // true
console.log(isAnagram("amigo", "gamei")); // false
console.log(isAnagram("elbow", "below")); // true
