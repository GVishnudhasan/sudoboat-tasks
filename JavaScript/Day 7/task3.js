let str = "Hi there, how are you doing? What do you think about the previous tasks?";
let arr = str.split("");
let count = 0;
let obj = {};

for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == undefined) {
        obj[arr[i]] = 1;
    } else {
        obj[arr[i]]++;
    }
}

console.log(obj);

for (let key in obj) {
    if (obj[key] > 1) {
        count++;
    }
}

console.log(`The alphabets are repeated ${count} times`);