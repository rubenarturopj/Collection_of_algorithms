/** 
 * Given 2 arrays of numbers in reverse, add 
    Input: l1 = [2,4,3], l2 = [5,6,4]   Output: [7,0,8]
    Explanation: 342 + 465 = 807.
 */

function addTwoNumbers(array1, array2) {
    const reversedArr1 = array1.reverse().join().replace(/,/g, "");
    const reversedArr2 = array2.reverse().join().replace(/,/g, "");
    const ar1number = parseInt(reversedArr1);
    const ar2number = parseInt(reversedArr2);
    const sum = ar1number + ar2number;
    const numberToString = sum.toString();
    const reversedSum = numberToString
        .split("")
        .reverse()
        .join()
        .replace(/,/g, "");
    console.log(reversedSum);
}

addTwoNumbers([2, 4, 3], [5, 6, 4]); //708
