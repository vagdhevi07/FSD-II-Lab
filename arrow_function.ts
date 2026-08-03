// Traditional Function
function findSquare(num: number): number {
    return num * num;
}

// Arrow Function
const findSquareArrow = (num: number): number => {
    return num * num;
};

// Shorthand Arrow Function
const multiply = (a: number, b: number): number => a * b;

// Arrow Function with Default Parameter
const greet = (name: string = "Guest"): string =>
    `Welcome ${name}!`;

// Testing
console.log(findSquare(6));
console.log(findSquareArrow(6));
console.log(multiply(12, 5));
console.log(greet());
console.log(greet("Priya"));