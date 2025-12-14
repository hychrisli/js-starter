// Arrays

const numList = [1, 2, 3, 3]
console.log(numList)
console.log(numList[1])

console.log(numList.indexOf(1))
console.log(numList.indexOf(4))
console.log(numList.includes(3))
console.log(numList.includes(5))

// shallow copy of the primitive values, copies the actual value
const numSlice = numList.slice(1, 3)
console.log(numSlice)
numList[2] = 4
console.log(numList) // changed
console.log(numSlice) // unchanged


const numList2 = [6, 7]
// return a new array, original ones unchanged
const numList3 = numList.concat(numList2)
console.log(numList)
console.log(numList3)

// stack ops O(1)
numList.push(8)
console.log(numList)
const v1 = numList.pop()
console.log(v1)
console.log(numList)

// shift all O(N)
numList.unshift(0)
console.log(numList)
const v2 = numList.shift()
console.log(v2)
console.log(numList)

//splice
// start at index 1, remove the next 2 elements, add `5`
numList.splice(1, 2, 5)
console.log(numList)

// revert the change: start at index 1, remove 1 element, add `2` and `4`
numList.splice(1, 1, 2, 4)
console.log(numList)


numList.reverse()
console.log(numList)
