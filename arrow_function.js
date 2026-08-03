"use strict";
// Traditional Function
function findSquare(num) {
    return num * num;
}
// Arrow Function
const findSquareArrow = (num) => {
    return num * num;
};
// Shorthand Arrow Function
const multiply = (a, b) => a * b;
// Arrow Function with Default Parameter
const greet = (name = "Guest") => `Welcome ${name}!`;
// Testing
console.log(findSquare(6));
console.log(findSquareArrow(6));
console.log(multiply(12, 5));
console.log(greet());
console.log(greet("Priya"));
