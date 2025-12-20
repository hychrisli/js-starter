console.log("=== clone arrays ===")
const arr1 = [5, 2, 3, 4, 5]
// shallow copy
console.log([...arr1])
console.log(Array.from(arr1))
console.log(arr1.slice()) // old school, slice without args returns the entire array

const arr2 = arr1 // not a copy, created a new reference to the same array
arr2.push(1)
console.log(arr1)

console.log("=== merge arrays ===")
// create a new merged array
console.log([...arr1, ...arr2])
console.log(arr1.concat(arr2))

// update the current array
const arr3 = [9, 8]
const arr4 = [...arr3]
arr3.push(...arr1)
console.log(arr3)
// add arr1 as an element, not flattened
arr4.push(arr1)
console.log(arr4)

console.log("=== bridge array and set ===")
const nums1 = [1, 1, 1, 1, 2, 2]
const set1 = new Set(nums1)
console.log([...set1])
console.log(Array.from(set1))
const nums2 = []
nums2.push(...set1)
console.log(nums2)

console.log("=== merge sets ===")
const set2 = new Set([1, 3, 3])
console.log(new Set([...set1, ...set2]))
console.log(set1.union(set2))
console.log(set1)

console.log("=== bridge array and map ===")
const pairs1 = [["apple", 1], ["orange", 2], ["banana", 3]]
const map1 = new Map(pairs1)
console.log(map1)
console.log([...map1])
console.log(Array.from(map1))
console.log(map1.entries().toArray())

console.log("=== extract keys or values===")
console.log([...map1.keys()])
console.log(Array.from(map1.keys()))
console.log(map1.keys().toArray())
console.log([...map1.values()])
console.log(Array.from(map1.values()))
console.log(map1.values().toArray())

console.log("=== merge maps===")
const map2 = new Map([["banana", 4], ["cherry", 5]])
console.log(new Map([...map1, ...map2])) // second map overwrites the first one if conflicts

// combine values
map1.forEach( (value, key) => {
    map2.set(key, (map2.get(key) ?? 0) + value)
})
console.log(map2)

console.log("=== sort a map===")
// convert to array to sort, ascending
console.log(new Map([...map2].sort((a, b) => a[1] - b[1])))

console.log("=== clone objects ===")
// shallow clone with spread operator
const myObj = {name: "Jim", address: { state: "CA", streetNumber: 1}}
const clone1 = {...myObj}
console.log(clone1)
myObj.address.streetNumber = 2
console.log(clone1) // street number change because of shallow copy

// shallow clone with object assign
const clone2 = Object.assign({}, myObj)
console.log(clone2)
myObj.address.streetNumber = 3
console.log(clone2)


// deep clone with structureClone()
const clone3 =structuredClone(myObj)
console.log(clone3)
myObj.address.streetNumber = 4
console.log(clone3) // street number not changed because of deep copy
console.log(myObj)

console.log("=== merge objects ===")
const myObj2 = {name: "Pam", phoneNumber: "123-4567"}
console.log({...myObj, ...myObj2})
console.log(Object.assign({}, myObj, myObj2))

// merge with combined values
Object.keys(myObj).forEach( key => {
    if(myObj2[key] != null) {
        myObj2[key] = myObj[key] + myObj2[key]
    } else {
        myObj2[key] = myObj[key]
    }
})

console.log(myObj2)

console.log("=== array of objects .map() ===")
const objs = [
    {a: 1, b:2},
    {a: 3, b: 4}
]
console.log(objs)
// notice the parenthesis here
console.log(objs.map(obj => ({...obj, c:5})))

// ❌ BROKEN: JavaScript thinks these are function curly braces
console.log(objs.map(p => { status: "active" }));
