class Std {

    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    display() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
    }
}

let student = new Std(101, "Vagdhevi");

student.display();