// define function in ECMAScript 6

var a = 10; 
var b = 8;

function sum(a, b) { 
    return a + b;
}

console.log("Sum = ", sum(a, b));

const minus = function(a, b) {
    return a - b;
}

console.log("Minus = ", minus(a, b));

const multiply = (a, b) => {
    return a * b;
}

console.log("Multiply = ", multiply(a, b));


const swap = (a, b) => {
    let temp = a;
    a = b;
    b = temp;
}

console.log(`a = ${a}, b = ${b}`);
swap(a, b);
console.log(`a = ${a}, b = ${b}`);

const swap_2 = (a, b) => {
    return [b, a];
}

[a, b] = swap_2(a, b);
console.log(`a = ${a}, b = ${b}`);
