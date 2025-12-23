async function asyncDivide(a, b) {
  assertNumber(a)
  assertNumber(b)
  const result = a / b
  console.log(`${a} / ${b} = ${result}`)
  return result
}


async function asyncAdd(a, b) {
  assertNumber(a)
  assertNumber(b)
  const result = a + b
  console.log(`${a} + ${b} = ${result}`)
  return result
}


function assertNumber(x) {
  if (typeof x != "number") {
    throw new TypeError(`[${x}] is not a number!`)
  }
}

async function doMath(a, b) {
  try {
    const res1 = await asyncAdd(a, b)
    const res2 = await asyncDivide(a, b)
    return res1 - res2
  } catch(err) {
    console.error("some error :", err)
  }

}

const result = await doMath(1, "Hello")
console.log(result)
