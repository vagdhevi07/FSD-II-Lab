let studentName: string = "Rahul";
let age: number = 20;
let isPresent: boolean = true;

console.log(studentName);
console.log(age);
console.log(isPresent);

function calculateArea(length: number, width: number): number {
    return length * width;
}

let area = calculateArea(10, 5);

console.log("Area =", area);

let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];

console.log("Fruits:", fruits.join(", "));

let employee: {
    id: number;
    name: string;
    department: string;
} = {
    id: 101,
    name: "Sneha",
    department: "HR"
};

console.log(employee);