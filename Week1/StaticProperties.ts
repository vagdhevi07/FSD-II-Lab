//Static Property and Static Method
class College {
    static collegeName: string = "SVECW";

    static displayCollege(): void {
        console.log(College.collegeName);
    }
}

College.displayCollege();