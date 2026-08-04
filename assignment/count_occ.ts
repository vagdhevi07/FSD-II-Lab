let array: number[] = [1, 2, 2, 3, 3, 3, 4];

let count: { [key: number]: number } = {};

for (let num of array) {
    if (count[num]) {
        count[num]++;
    } else {
        count[num] = 1;
    }
}

console.log(count);