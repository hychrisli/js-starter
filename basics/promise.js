function wait(ms, isSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if (isSuccess) {
          resolve("Okay, this is resolved")
        } else {
          reject("Nope, this has failed")
        }

      },
      ms
    )
  })
}


function handleWait(seconds, isSuccess) {
  wait(seconds * 1000, isSuccess)
  .then((data) => {
    console.log(data)
    console.log(`${seconds} seconds passed with success`)
  })
  .catch((error) => {
    console.log(error)
    console.log(`${seconds} seconds passed with failure`)
  })
  .finally(() => {
    console.log(`operation finished for (${seconds}, ${isSuccess})`)
  })
}

handleWait(2, true)
handleWait(1, false)
handleWait(1.5, true)