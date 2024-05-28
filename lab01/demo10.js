/**
 * Asynchronous programming
 */

'use strict'
console.clear()

// Promise
const borrow_money_promise = () => {
    return new Promise((resolve, reject) => {
        console.log('Borrow money')
        setTimeout(() => {
            let isHappy = Math.random() >= 0.5
            if(isHappy) {
                console.log('Borrow 9999$')
                return resolve(9999)
            } else {
                return reject('I am not happy')
            }
        }, 1000)
    })
}

const travel = async () => {
    try {
        let money = await borrow_money_promise()
        console.log("OK go go...")
        console.log(`Travel with ${money}$`)
        console.log('OK, done')
    } catch(error) {
        console.log(error)
    } finally {
        console.log('Finally')
    }
} 

travel()