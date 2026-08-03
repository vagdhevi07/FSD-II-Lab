let arr: number[] = [1, 2, 3, 2, 4, 3, 5];

let duplicates: number[] = [];

for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] === arr[j]) {

            if (!duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }
}

console.log("Duplicate Elements =", duplicates);