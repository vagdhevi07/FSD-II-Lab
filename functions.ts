//1. Function (No Parameters, No Return Type)
function sayHello(): void {
    console.log("Hello!");
}

sayHello();

//2. Function with Parameter

function greet(name: string): void {
    console.log("Hello " + name);
}

greet("Ravi");

//3. Function with Return Type

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20)); 

//4. Function with Parameter and Return Type

function square(num: number): number {
    return num * num;
}

console.log(square(5));

//5. Function with Two Parameters

function multiply(x: number, y: number): number {
    return x * y;
}

console.log(multiply(4, 6));