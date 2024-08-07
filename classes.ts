class Person {
    name: string; email: string;
    constructor(name: string, emailID: string) {
        this.email = emailID,
            this.name = name
    }
}

const person = new Person("Velmurugan", "vel@gmail.com");

console.log(person);
