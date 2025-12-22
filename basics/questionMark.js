console.log("==== Ternary Operator ====")
const result1 = 1 === 0 ? "No" : "Yes"
console.log(result1)

console.log("=== Optional Chaining ===")
const user = {
  address: {
    street: "123 Sesame Street"
  }
}

console.log(user.address.street);
console.log(user.address.state); // this is OK, address is defined
// console.log(user.name.firstName); // this throws an error TypeError: Cannot read properties of undefined
console.log(user.name?.firstName) // this is OK


console.log("=== Nullish Coalescing Operator ===")
// provides a default value
var someVar
console.log("someVar: " + someVar);
// + takes precedence over ??
console.log("someVar with Default: " + (someVar ?? "nice"))
