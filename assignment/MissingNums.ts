let arr: number[] = [1, 2, 3, 5];

let n: number = 5;

let expectedSum: number = (n * (n + 1)) / 2;

let actualSum: number = 0;

for (let num of arr) {
    actualSum = actualSum + num;
}

let missing: number = expectedSum - actualSum;

console.log("Missing Number =", missing);