"use strict";
let binary = "1010";
let decimal = 0;
let power = 0;
for (let i = binary.length - 1; i >= 0; i--) {
    let digit = Number(binary[i]);
    decimal = decimal + digit * Math.pow(2, power);
    power++;
}
console.log("Decimal =", decimal);
