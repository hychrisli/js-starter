let x = 3;
console.log(x);


// function scope
function checkVarScope() {
  if (true) {
    var greeting = "Hello there from inside if";
    let noGreeting = "this is only inside block";
  }
  console.log(greeting) // The "leak" of var
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



// lexical scope

// 1. GLOBAL SCOPE
let a1 = 10;

function outer() {
  // 2. OUTER SCOPE (Lexical Parent of inner())
  let b1 = 20;

  function inner() {
    // 3. INNER SCOPE
    let c1 = 30;

    // A. Accesses its own scope (c)
    console.log(`C: ${c1}`);

    // B. Accesses its immediate lexical parent's scope (b)
    console.log(`B: ${b1}`);

    // C. Accesses the global scope (a)
    console.log(`A: ${a1}`);
  }

  inner();

  // D. Cannot access 'c', because 'c' is in the inner() scope
  // console.log(c); // This would throw a ReferenceError
}

outer();



// The leak of var
var actions = [];

for (var i = 0; i < 3; i++) {
  // 'i' is declared with 'var', so it belongs to the function/global scope.
  actions.push(function () {
    console.log(i); // This function 'closes over' the variable 'i'
  });
}

console.log("--- Executing VAR actions ---");

actions[0](); // Output: 3
actions[1](); // Output: 3
actions[2](); // Output: 3

/*
Analysis of the var Bug:

    The var i variable is function-scoped, not block-scoped to the for loop.

    The loop finishes, and the single variable i has been incremented until it fails the condition (i is now 3).

    Each function in the actions array is a closure that points back to the same single i variable.

    When you execute the functions later, they look up the current, final value of i, which is 3.

*/

console.log("--- Reassignment ---")

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

console.log("\n conditions \n")
const v = false
const w = true
if (v) {
  console.log("Got v true here")
} else if (w) {
  console.log("Got w true here")
} else {
  console.log("all false")
}


const code = 2

let message;
switch (code) {
  case 1: message = "yes"; break;
  case 2: message = "no"; break;
  default: "ok";
}

console.log(message)

function isTruthy(x) {
  if (x) {
    console.log(`[${x}] is truthy`)
  } else {
    console.log(`[${x}] is false`)
  }
}

isTruthy(false)
isTruthy(true)
isTruthy(0)
isTruthy(1)
isTruthy(-1)
isTruthy("")
isTruthy('')
isTruthy(``)
isTruthy(" ")
isTruthy("false")
isTruthy([])
isTruthy({})
isTruthy(null)
isTruthy(undefined)
isTruthy(Infinity)
isTruthy(Infinity / -Infinity)


