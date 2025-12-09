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
console.log(c)
