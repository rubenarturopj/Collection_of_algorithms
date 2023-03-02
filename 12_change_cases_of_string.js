/*
    Read a sentence and replace lowercase characters by uppercase and vice-versa.

    Sample input: jASON         Sample input2: Ruby
    Sample output: Jason        Sample output2: rUBY
*/

let sample1 = "jASON";
let sample2 = "Ruby";
let sample3 = "HELLO world";
let sample4 = "ToMaToEs"
let sample5 = "NoW yOu WiLl SeE FALL GUyS";
let sample6 = "la mitad de este texto esta en mayusculas Y LA OTRA MITAD EN MINUSCULAS."

function replaceCases(string) {
    let lowerCaseRegex = /[a-z]/;
    let temp = "";
    let temp2 = "";
    let newString = "";
    for (let index = 0; index < string.length; index++) {
        if (lowerCaseRegex.test(string[index]) === true) {
            temp = string[index].toUpperCase();
            newString += temp;
        } else {
            temp2 = string[index].toLowerCase();
            newString += temp2;
        }
    }
    return newString;
};

console.log(replaceCases(sample1));
console.log(replaceCases(sample2));
console.log(replaceCases(sample3));
console.log(replaceCases(sample4));
console.log(replaceCases(sample5));
console.log(replaceCases(sample6));