"use strict";
let start = 10;
let end = 30;
for (let num = start; num <= end; num++) {
    if (num < 2) {
        continue;
    }
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}
