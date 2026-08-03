"use strict";
let decimal = 10;
let temp = decimal;
let binary = "";
if (temp === 0) {
    binary = "0";
}
while (temp > 0) {
    let remainder = temp % 2;
    binary = remainder + binary;
    temp = Math.floor(temp / 2);
}
console.log("Binary =", binary);
