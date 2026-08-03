//Readonly Property

class Book {
    readonly title: string;

    constructor(title: string) {
        this.title = title;
    }

    display(): void {
        console.log(this.title);
    }
}

const b = new Book("TypeScript Basics");
b.display();