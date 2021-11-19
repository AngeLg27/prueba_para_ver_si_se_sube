const arr = [-10, 23, 5, 2, 234, 99, 22, 56, 88]

let testPassed = false

for(let index = 0; index < arr.length; index++){
    const item = arr[index]
    if(item > 0) testPassed = true
    if(item <= 0){
        testPassed = false
        break
    }
}

console.log(testPassed)

/*
    metodo every => nos permite hacer un test sobre cada uno de los
    elementos para ver si cumplen una cierta condicions

    y el valor que nos va a dolver es true o false


*/


console.log('\nMetodo every')
const passed = arr.every((item, _)=> item > 0)

console.log(passed)

 