let arr: number[] = [1, 2, 3, 4, 5];

let n: number = 2;

for (let i = 0; i < n; i++) {
    let first: number = arr[0];

    for (let j = 0; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
    }

    arr[arr.length - 1] = first;
}

console.log(arr);