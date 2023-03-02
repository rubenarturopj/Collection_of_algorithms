/*
    If a word has more uppercase leters than lowercase, it will be rewritten in uppercase,
    otherwise the word will be rewritten in lowercase.

    Big O Notation:   Time complexity: O(n), Space complexity: O(n)
*/

let sample0 = "CONGraTUlatIONS";
let sample0_1 = "DOCument";
let sample0_2 = "strING";
let sample1 = "jASON";
let sample2 = "Ruby";
let sample3 = "ToMAtoes";
let sample4 = "FIFTYfifty";
let sample4_1 = "FIFTY fifty";
let sample5 = "Harry Potter";
let sample6 = "TENGO 15 MAYUSCULAS y 11 minusculas.";
let sample7 = "TENGO 15 MAYUSCULAS y ahora tengo 21 minusculas.";

function decideCase(string) {
    let counterLowercase = 0;
    let counterUppercase = 0;
    let newString = "";
    for (let index = 0; index < string.length; index++) {
        let temp = string[index];
        if (temp === temp.toLowerCase()) {
            counterLowercase++;
        }
        if (temp === temp.toUpperCase()) {
            counterUppercase++;
        }
    }
    if (counterLowercase >= counterUppercase) {
        newString = string.toLowerCase();
    } else {
        newString = string.toUpperCase();
    }
    return newString;
}

console.log(decideCase(sample0));
console.log(decideCase(sample0_1));
console.log(decideCase(sample0_2));
console.log(decideCase(sample1));
console.log(decideCase(sample2));
console.log(decideCase(sample3));
console.log(decideCase(sample4));
console.log(decideCase(sample4_1));
console.log(decideCase(sample5));
console.log(decideCase(sample6));
console.log(decideCase(sample7));
