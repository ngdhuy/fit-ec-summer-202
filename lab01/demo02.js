let arr = [1, 2, 3, 4, 5];
console.log(arr);

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("-------------");

let i = 0;
while(i < arr.length) {
    if(arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
    i++;
}

console.log("-------------");

for(item of arr) {
    console.log(item);
}

console.log("-------------");

arr.forEach(function(item) {
    console.log(item + 2);
});