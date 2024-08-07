// Enum is a way to define a set of named constants.
// it allows you to define  collection of related values that can be used.

enum UserRoles {
    Manager = "manager",
    Sales = "sales",
    Purchase = "purchase",
    Labour = "labour",
    Receptionist = "receptionist"
}

let role = UserRoles.Manager;

let yourRole: string = `Your role is a ${role}!`;

console.log(yourRole);

