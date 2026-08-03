"use strict";
//Readonly Property
class Book {
    title;
    constructor(title) {
        this.title = title;
    }
    display() {
        console.log(this.title);
    }
}
const b = new Book("TypeScript Basics");
b.display();
