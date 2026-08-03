"use strict";
//any
let value;
value = 100;
console.log(value);
value = "Hello";
console.log(value);
value = true;
console.log(value);
//unknown
let v = "TypeScript";
if (typeof v === "string") {
    console.log(value.toUpperCase());
}
let num = 25;
if (typeof num === "number") {
    console.log(num * 2);
}
//void
function greet() {
    console.log("Welcome to TypeScript");
}
greet();
function add(a, b) {
    console.log("Sum =", a + b);
}
add(10, 20);
