let x = 3;
console.log(x);


// function scope
function checkVarScope() {
  if (true) {
    var greeting = "Hello there from inside if";
    let noGreeting = "this is only inside block";
  }
  console.log(greeting)
  // console.log(noGreeting), this will throw an error ReferenceError: noGreeting is not defined
}

checkVarScope();
// console.log(greeting); this will throw an error ReferenceError


// block scope
function checkBlockScope() {
  if (true) {
    const green = "This is green";
    let red = "This is red";
    console.log(green);
    console.log(red);
  }

  // console.log(green); // this will throw an error ReferenceError:
  // console.log(red); //this will throw an error ReferenceError:
}

checkBlockScope();


// reassignment

var a = 1;
let b = 2;
const c = 3;
console.log(a);
console.log(b);
console.log(c)


a = 4;
b = 5;
// c = 6; // TypeError: Assignment to constant variable.

console.log(a);
console.log(b);
console.log(c);


const firstName = "Chris";
const lastName = "Li";
const randomNumber = 15

const oldMessage = "Hello, My name is " + firstName + " " + lastName + ", and I'm #" + randomNumber;
console.log(oldMessage);

const newMessage = `Hello, My name is ${firstName} ${lastName} and I am #${randomNumber}`;
console.log(newMessage);

const newMultiLineMessage = `
  First name: ${firstName}
  Last name: ${lastName}
  My number: ${randomNumber + 2}
`;
console.log(newMultiLineMessage);


let n1 = 12;
let f1 = 3.14;
let i1 = Infinity;
console.log(`my value is: ${i1 > n1}`);
console.log(`this value is: ${n1 / "abc"}`)
console.log(`how about this one : ${f1 / 0}`)
console.log(Infinity / Infinity)
console.log(Infinity / -Infinity)


console.log("null and undefined")

// console.log(notValue == null) // ReferenceError: notValue is not defined
// console.log(notValue === null) // ReferenceError: notValue is not defined
// console.log(notValue == undefined) // ReferenceError: notValue is not defined
// console.log(notValue === undefined) // ReferenceError: notValue is not defined
console.log(null == null)
console.log(null === null)
console.log(undefined == undefined)
console.log(undefined === undefined)

console.log("undefined value")
let unValue;
console.log(unValue == null)
console.log(unValue === null)
console.log(unValue == undefined)
console.log(unValue === undefined)

console.log("null value check")
const nullValue = null;
console.log(nullValue == null)
console.log(nullValue === null)
console.log(nullValue == undefined)
console.log(nullValue === undefined)
