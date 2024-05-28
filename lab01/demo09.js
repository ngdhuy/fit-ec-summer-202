/**
 * Resolve call-back hell by using Promise
 */

'use strict'
console.clear()

const borrow_money = () => {
    console.log('Borrow money')
    setTimeout(() => {
        console.log('Borrow 100$')
        return 100
    }, 1000)
}

const travel = (value) => console.log(`Travel with ${value}$`)

let money = borrow_money()
travel(money)

// Promise
console.log('----------------------')
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

borrow_money_promise()
    .then(value => {
        console.log("OK go go...")
        travel(value)
    })
    .then(() => console.log('OK, done'))
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'))  