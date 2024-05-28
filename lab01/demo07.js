// Array in EC6

let a = [1, 2, 3, 4, 5];
console.log(a);

a.push(6);
console.log(a);

a.reverse();
console.log(a);

a.sort();
console.log(a);

a.push([88, 66, [11, 22, 33]]);
console.log(a);
console.log(a.length);

let b = a.pop();
console.log(b);
console.log(a);

let c = a.shift();
console.log(c);
console.log(a);

a.unshift(1);
console.log(a);

let d = a.slice(1, 3);
console.log(d);
console.log(a);

a.splice(1, 3, 99, 88, 77);
console.log(a);

// advanced
console.clear();

a = [1, 2, 3, 4, 5];

let e = a.map((value, index, array) => {
    console.log(value, index, array);
    return value * 2;
});
console.log(e);
console.log(a);

//let e = a.map((value, index, array) => value % 2 == 0)
let f = a.filter(v => v % 2 == 0);
console.log(f);

let g = a.reduce((accumulator, value, index, array) => {
    console.log(accumulator, value, index, array);
    return accumulator + value;
});
console.log(g);