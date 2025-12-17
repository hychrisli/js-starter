const mySet = new Set();

mySet.add(1)
mySet.add("Hello")
mySet.add(2)
mySet.add(1)


console.log(mySet)
console.log(mySet.has(1))
console.log(mySet.has(3))
console.log(mySet.has("hello"))
console.log(mySet.has("Hello"))
console.log(mySet[0]) // undefined
//console.log(mySet.get(1)),// not get method

console.log("=== delete value ====")
console.log(mySet.delete(3))
console.log(mySet.delete(1))
console.log(mySet)


// remove duplicates
console.log("=== dedups ===")
const dupList = [1, 2, 1, 1, 1, 2, 1, 3, 12, 21]
const dedupSet = new Set(dupList)
const dedupList = [...dedupSet] // spread operator
console.log(dupList)
console.log(dedupSet)
console.log(dedupList)


// iterations
mySet.add(5)
mySet.add(6)
mySet.add("Good")

console.log("==== values() ====")
for (const v of mySet.values()) {
  console.log(v)
}

console.log("==== keys() ====")
for (const v of mySet.keys()) {
  console.log(v)
}

console.log("==== entries() ====")
for (const entry of mySet.entries()) {
  console.log(entry)
}


// Advanced Set Operations
console.log("=== intersection ===")
const set1 = new Set([1, 3, 4])
const set2 = new Set([3, 4, 6, 8])

console.log(set1.intersection(set2))
console.log(set1)
console.log(set2)

console.log("=== union ===")
console.log(set1.union(set2))
console.log(set1)
console.log(set2)

console.log("=== difference ===")
console.log(set1.difference(set2))
console.log(set1)
console.log(set2)


console.log("=== symmetric difference ===")
console.log(set1.symmetricDifference(set2))
console.log(set1)
console.log(set2)
