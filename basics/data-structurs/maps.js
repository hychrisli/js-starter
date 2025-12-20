let plans = new Map();

// this is an object, not a map (don't confuse with python)
const notes = {
  id: 12,
  weather: "good"
}
plans.set(1, 1) // not put
plans.set("notes", notes)
plans.set(notes, "my notes dawg")

console.log(plans)
console.log(plans.get(1))
console.log(plans.get("notes"))
console.log(plans.get(notes))

console.log("=== overwrite duplicates ===")
plans.set(1, 3)
console.log(plans.get(1))

console.log("=== has ===")
// Map only has higher order function forEach,
// and it does not have map(), filter() and reduce()
console.log(plans.has(1))
console.log(plans.has(2))

console.log("=== delete ===")
plans.set(2, 2)
console.log(plans.delete(2))
console.log(plans.delete(2))

console.log(plans.size) // not plans.size()


// iterate it
console.log("=== loop keys() ===")
for (const key of plans.keys()) {
  console.log(`${key} ===> ${plans.get(key)}`)
}

console.log("=== loop values() ===")
for (const val of plans.values()) {
  console.log(val)
}

console.log("=== loop entries() ===")
for (const entry of plans.entries()) {
  console.log(entry)
  console.log(`${entry[0]} ===> ${entry[1]}`)
}

console.log("=== foreach ===")
plans.forEach(value => console.log(value)) // only values
// notice the reverse order value first and key second
plans.forEach((value, key) => console.log(key, value)) // both keys and values