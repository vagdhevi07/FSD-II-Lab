let num: number = 145;
let temp: number = num;
let sum: number = 0;

while (temp > 0) {
    let digit: number = temp % 10;

    let factorial: number = 1;

    for (let i = 1; i <= digit; i++) {
        factorial = factorial * i;
    }

    sum = sum + factorial;

    temp = Math.floor(temp / 10);
}

if (sum === num) {
    console.log(num + " is a Strong Number");
} else {
    console.log(num + " is not a Strong Number");
}