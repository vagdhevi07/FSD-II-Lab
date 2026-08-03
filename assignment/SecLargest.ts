let arr: number[] = [10, 5, 20, 8, 15];

let largest: number = -Infinity;
let secondLargest: number = -Infinity;

for (let num of arr) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log("Largest =", largest);
console.log("Second Largest =", secondLargest);