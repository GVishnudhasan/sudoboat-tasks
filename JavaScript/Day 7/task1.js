let str = "I Have a String";
let arr = str.split(" ");
let rev = [];

for (let i = arr.length-1; i >= 0; i--) {
    rev.push(arr[i]);
}

console.log(rev.join(" "));