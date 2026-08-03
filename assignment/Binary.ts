let decimal: number = 10;
let temp: number = decimal;
let binary: string = "";

if (temp === 0) {
    binary = "0";
}

while (temp > 0) {
    let remainder: number = temp % 2;

    binary = remainder + binary;

    temp = Math.floor(temp / 2);
}

console.log("Binary =", binary);