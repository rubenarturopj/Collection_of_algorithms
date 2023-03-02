/*
    Determine the index of a character that can be removed to make a string a palindrome.

    Return -1  if there's no solution

    Big O notation:  Time complexity: O(n)  Space complexity: O(n)
*/

function getPalindromeIndex(string) {
    function checkIfPalindrome(string) {
        for (let i = 0; i < Math.floor(string.length / 2); i++) {
            if (string[i] !== string[string.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            if (checkIfPalindrome(string.slice(i, string.length - i - 1))) {
                return string.length - i - 1;
            } else if (
                checkIfPalindrome(string.slice(i + 1, string.length - i))
            ) {
                return i;
            } else {
                return -1;
            }
        }
    }
    return -1;
}
console.log(getPalindromeIndex("aabaa"));
console.log(getPalindromeIndex("aaab"));
console.log(getPalindromeIndex("baaa"));
console.log(getPalindromeIndex("baaabcc"));
