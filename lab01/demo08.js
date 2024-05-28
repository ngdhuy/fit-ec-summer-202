// callback function and error callback hell

'use strict'

console.clear()

// call-back function
let value = 1
const f_1 = () => {
    console.log(value)
    setTimeout(() => {
        value++
        console.log(value)
    }, 1000)
    console.log(value)
}
f_1()

// error callback hell
console.clear()

const f_2 = () => {
    setTimeout(() => {
        console.log('1')
        setTimeout(() => {
            console.log('2')
            setTimeout(() => {
                console.log('3')
            }, 1000)
        }, 500)
    }, 100)    
}
f_2()