// An object is a structured data type that represents the collection of properties,
// each with a key and associated value. The properties of an object can have 
// specific types, and that object itself can be annotated with a type, often 
// defined using on interface or a type alias.

const person : {fName: string;lName: string; age: number} = {
    fName:"Velmurugan",
    lName:"Ravindran",
    age:23
}

console.log(person.fName,person.lName,person.age);

// ----------------------

function user() : {fName: string;lName: string; age: number} {
    return {
        fName:"Velmurugan",
        lName:"Ravindran",
        age:23
    }
}

console.log(user())