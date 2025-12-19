// Arrays

const nums = [1, 2, 3, 3]
console.log(nums)
console.log(nums[1])

console.log(nums.indexOf(1))
console.log(nums.indexOf(4))
console.log(nums.includes(3))
console.log(nums.includes(5))

// shallow copy of the primitive values, copies the actual value
const numSlice = nums.slice(1, 3)
console.log(numSlice)
nums[2] = 4
console.log(nums) // changed
console.log(numSlice) // unchanged


const nums2 = [6, 7]
// return a new array, original ones unchanged
const nums3 = nums.concat(nums2)
console.log(nums)
console.log(nums3)

// stack ops O(1)
nums.push(8)
console.log(nums)
const v1 = nums.pop()
console.log(v1)
console.log(nums)

// shift all O(N)
nums.unshift(0)
console.log(nums)
const v2 = nums.shift()
console.log(v2)
console.log(nums)

//splice
// start at index 1, remove the next 2 elements, add `5`
nums.splice(1, 2, 5)
console.log(nums)

// revert the change: start at index 1, remove 1 element, add `2` and `4`
nums.splice(1, 1, 2, 4)
console.log(nums)


nums.reverse()
console.log(nums)


// different types
const someList = ["Hello", 1, 1.3, ["my", "list", 2]]
console.log(someList)


// for loop
console.log("==== for loop ====")
// need to use mutable let
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

console.log("==== for `of` loop no index ====")
// const variable is not being assigned within the loop
// it is re-declared in a new scope on every interaction
for (const val of nums) {
  console.log(val)
}

// for `of` is used to iterate over iterables
// for `in` is used for iterate property keys of an object
console.log("==== for `in` loop no index ====")
for (const index in nums) {
  console.log(index) // this prints out the index
}

// while loop
console.log("=== while loop ===")
let i1 = 0;
while (i1 < nums.length) {
  console.log(nums[i1])
  i1++;
}

// do while loop
console.log("=== do while loop ===")
let i2 = 0
do {
  console.log("Here's " + nums[i2]);
  i2++;
} while (i2 < nums.length)

// spread operator
console.log("==== spread operator ===")
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [4, 5, 6, 7, 8]
const arr3 = [...arr1, ...arr2]
console.log(arr3)


// higher order functions
console.log("==== forEach ====")
nums.forEach(x => console.log(x))
nums.forEach(x => {
  console.log("Well this is " + x)
})

console.log("==== map ====")
const numsPlus = nums.map(x => x+1)
numsPlus.forEach(x => console.log(x))

console.log("==== filter ===")
console.log(nums.filter(x => x > 2))

console.log("=== reduce ===")
console.log(nums.reduce((accu, curVal) => accu + curVal)) // taking the first value of the array as initial
console.log(nums.reduce((accu, curVal) => accu + curVal, 0)) // initial 0 value
console.log(nums.reduce((accu, curVal) => accu + curVal, 1)) // initial 1 value


console.log("=== reduce full signiture without init === ")
console.log(nums.reduce((accu, curVal, curIdx, arr) => {
  console.log(accu, curVal, curIdx, arr)
  return accu + curVal
})) // no init

console.log("=== reduce full signiture with init 0 === ")
console.log(nums.reduce((accu, curVal, curIdx, arr) => {
  console.log(accu, curVal, curIdx, arr)
  return accu + curVal
}, 0)) // initial 0 value

const emptyArr = []
// console.log(emptyArr.reduce((accu, curVal) => accu + curVal)) // TypeError: Reduce of empty array with no initial value
console.log(emptyArr.reduce((accu, curVal) => accu + curVal, 0))

console.log("=== find ===")
console.log(nums.find(x => x < 2))

console.log("=== find with thisArg ===")
const finder = {
  threashold: 2,
  check(x) {
    return x < this.threashold
  }
}
console.log(nums.find(finder.check)) // undefined
console.log(nums.find(finder.check, finder)) // correct result


const finder2 = {
  threashold: 2,
  check: x => x < this.threashold
}
console.log(finder2.check(1)) // false because this.threashold is undefined
console.log(1 < undefined)


console.log("=== some() ===")
console.log(nums.some(x => x > 2)) // true
console.log(nums.some(x => x > 10)) // false

console.log("=== every() ===")
console.log(nums.every(x => x > 0)) // true
console.log(nums.every(x => x > 2)) // false


console.log("=== array destructuring ====")
const [num1, num2, ...restNums] = nums
console.log(num1)
console.log(num2)
console.log(restNums)