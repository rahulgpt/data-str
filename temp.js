class Student {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(`Hi, your name is ${this.name}`);
    }
}

let student = new Student('rahul');

console.log(student.name)

student.printName();

console.log(student);

