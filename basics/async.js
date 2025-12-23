async function divideAsync(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    throw new TypeError("Not a number!")
  }
  const result = a / b
  console.log(`${a} / ${b} = ${result}`)
  return result
}

function handleDiv(a, b) {
  const divPromise = divideAsync(a, b)
  console.log("I've done it")
  divPromise.then(result => {
    console.log("I got the result " + result)
  }).catch(error => {
    console.log("I got an error " + error)
  }).finally( () => {
    console.log("what's done is done")
  })
  console.log("I've done it again")
}


handleDiv(Infinity, 2)