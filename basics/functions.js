function minus(a, b) {
  return a - b;
}

console.log("minus: " + minus(5, 10));


const plus = (a, b) => { return a + b };
const plusUndefined = (a, b) => { a + b };

console.log("plus: " + plus(1, 2))
console.log("plus2: " + plusUndefined(3, 4)); // undefined

let multi = (a, b) => { return a * b };
console.log("multiply: " + multi(2, 6));


// hoisting for function, defined later
console.log(divide(16, 4));
function divide(a, b) {
  return a / b;
}

// arrow function requires definition first

const globalName = 'Chris-3';
const user1 = {
  name: 'Chris-1',
  getName: function () {
    return this.name;
  },
  getGlobalName() {
    return this.globalName;
  }
}

console.log(user1.getName());
console.log(user1.getGlobalName());
// Never use an arrow function to define a simple method on an object
// if you need to access the object's properties using this.
const user2 = {
  name: 'Chris-2',
  getName: () => this.name,
  getGlobalName: () => this.globalName
}
console.log(user2.getName());
console.log(user2.getGlobalName());


// More on this ?

const Greeter = {
  message: "Hello!",

  // Regular function defined as a method
  startGreeting: function () {
    console.log("Outer1 `this.message`:", this.message); // Output: "Hello!"

    // Regular function used as a callback
    setTimeout(function () {
      // 'this' inside the callback refers to the global object/window
      // (or undefined in strict mode), NOT the Greeter object.
      console.log("Regular Function Callback `this.message`:", this.message);
      // Output: Regular Function Callback this.message: undefined (or "Hello!" if 'message' is a global variable)
    }, 1);
  }
};

Greeter.startGreeting();

// rewrite the logic to have defined `this.message`

const GreeterArrow = {
  message: "Hello!",

  startGreeting: function () {
    console.log("Outer2 `this.message`:", this.message);
    setTimeout(() => {
      console.log("arrow function `this.message`:", this.message);
    }, 1)
  }
}

GreeterArrow.startGreeting();


// write a closure to get and set some value
function somePerson(firstName) {
  let myName = firstName;

  return function setName(name) {
    console.log("My name was: " + myName);
    myName = name;
    console.log("My name is now: " + myName);
    // console.log("my name is now" + this.myName); // undefined, because this is defined by the caller
  }

}

const person = somePerson("Cliff");
person("Chris");
person("Josh");


// closure with arrow function

function arrowPerson(firstName) {
  let myName = firstName;

  return (name) => {
    console.log("My name was: " + myName);
    myName = name;
    console.log("My name is now: " + myName);
    // console.log("my name is now" + this.myName); // undefined still
    /*
      Arrow functions inherit this from their surroundings.
      However, the "surroundings" of a normal function call usually have a this that points to the window or undefined.
      Local variables (let, const) are never properties of this.
    */
  }

}

const arrowP = arrowPerson("Justin");
arrowP("Hugh");
arrowP("James");
