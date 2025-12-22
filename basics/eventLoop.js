console.log("1. Start")

setTimeout(() => {
    console.log("2. Timeout");
}, 0);


Promise.resolve().then(() => {
    console.log("3. Promise");
});

console.log("4. End")

/*
    1. Start
    4. End
    3. Promise -> promise is in a higher priority quue
    2. Timeout
*/