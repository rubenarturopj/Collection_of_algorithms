//  Get the number with the max number of divisors and how many divisors it has. If there
//  are two or more numbers with the same amount of divisors, choose the greater number.

//  Print the number with the max number of divisors and the number of divisors

const x = [
    767, 665, 999, 895, 907, 796, 561, 914, 719, 819, 555, 529, 672, 933, 882,
    869, 801, 660, 879, 985,
];

const y = [1, 100, 150, 84, 2, 4, 156, 6, 90, 12, 24, 96, 36, 60, 72];

const maxDivisors = (array) => {
    let highest = 0;
    let numOfDivisor = 0;
    let counter = 0;

    array.forEach((item) => {
        for (let i = 1; i <= item; i++) {
            if (item % i === 0) {
                counter++;
            }
        }

        if (counter > numOfDivisor) {
            numOfDivisor = counter;
            highest = item;
        } else if (counter === numOfDivisor) {
            if (highest < item) {
                highest = item;
            }
        }
        counter = 0;
    });

    return [highest, numOfDivisor];
};

console.log(
    maxDivisors([
        767, 665, 999, 895, 907, 796, 561, 914, 719, 819, 555, 529, 672, 933,
        882, 869, 801, 660, 879, 985,
    ])
);

console.log(maxDivisors(y));
