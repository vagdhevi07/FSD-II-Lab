"use strict";
let arr = [10, 5, 20, 8, 15];
let largest = -Infinity;
let secondLargest = -Infinity;
for (let num of arr) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    }
    else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}
console.log("Largest =", largest);
console.log("Second Largest =", secondLargest);
