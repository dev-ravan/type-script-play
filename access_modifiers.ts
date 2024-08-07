// In type script, you can use access modifiers to control the visibility
// of class members (properties and methods).

// Types

// Public
// Members marked as public can be accessed from anywhere, 
// both inside and outside of the class

// Private
// Members marked as private can only be accessed within 
// the class they defined in.

// Protected
// Members marked as protected can be accessed from within the class 
// they are defined in, as well as any sub classes that extend the class.

class UserDetails {
    protected emailID: string;
    public name: string;
    private password: any;
    constructor(emailID: string, name: string, password: any) {
        this.emailID = emailID;
        this.name = name;
        this.password = password
    }

    getPassword(): string {
        return `hi ${this.name} your password is ${this.password}`
    }
}

const vel = new UserDetails("vel@gmail.com", "Vel", "HIug&*%6tg75");

console.log(vel.name);
console.log(vel.getPassword())


// We can't access the private 
// console.log(vel.password);

