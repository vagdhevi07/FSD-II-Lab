"use strict";
// Class with Constructor
class Student {
    name;
    rollNo;
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
    }
}
const s1 = new Student("Rahul", 101);
s1.display();
// Constructor Overloading (Using Optional Parameter)
class Mobile {
    brand;
    price;
    constructor(brand, price = 15000) {
        this.brand = brand;
        this.price = price;
    }
    display() {
        console.log(`${this.brand} - ₹${this.price}`);
    }
}
const m1 = new Mobile("Samsung");
const m2 = new Mobile("Apple", 80000);
m1.display();
m2.display();
