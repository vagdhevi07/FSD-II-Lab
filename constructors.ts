// Class with Constructor

class Student {
    name: string;
    rollNo: number;

    constructor(name: string, rollNo: number) {
        this.name = name;
        this.rollNo = rollNo;
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
    }
}

const s1 = new Student("Rahul", 101);
s1.display();

// Constructor Overloading (Using Optional Parameter)
class Mobile {
    brand: string;
    price: number;

    constructor(brand: string, price: number = 15000) {
        this.brand = brand;
        this.price = price;
    }

    display(): void {
        console.log(`${this.brand} - ₹${this.price}`);
    }
}

const m1 = new Mobile("Samsung");
const m2 = new Mobile("Apple", 80000);

m1.display();
m2.display();