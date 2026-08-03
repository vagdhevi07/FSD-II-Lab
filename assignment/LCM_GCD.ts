let a: number = 12;
let b: number = 18;

let x: number = a;
let y: number = b;

while (y !== 0) {
    let temp: number = y;
    y = x % y;
    x = temp;
}

let gcd: number = x;
let lcm: number = (a * b) / gcd;

console.log("GCD =", gcd);
console.log("LCM =", lcm);