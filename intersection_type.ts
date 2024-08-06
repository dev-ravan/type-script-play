// A intersection type is a way to combine multiple types in single type

// First type
type Person = {
    name: string,
    age: number
}


// Second Type
type Employee = {
    id: number,
    title: string
}

// Combine 1 and 2 types
type PersonAndEmployee = Person & Employee;

const ravan : PersonAndEmployee = {
    id:1,
    age:23,
    name:"Ravan",
    title:"Software Dev"
}

function testUser():PersonAndEmployee {
    return {
    id:4,
    age:43,
    name:"Raghu",
    title:"Manager"
    }
}

console.log(ravan.name);
