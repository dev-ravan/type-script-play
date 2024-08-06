// Regular Fun
// Pass the params and get return response

function getHello(userName: string) {
    return "Hello " + userName + "!";
}

let res = getHello("Vel");

console.log(res);

// Multi params
function addNum(x: number, y: number) {
    return x + y;
}

let res2 = addNum(78, 52);

console.log(res2);

// Arrow Function without return type
const sumMarks = (num1: number, num2: number) => num1 + num2;

let total = sumMarks(45, 80);

console.log(total);

// Arrow Function with return type
const multi = (num1: number): number => num1 * num1;

let res3 = multi(7);

console.log(res3);
