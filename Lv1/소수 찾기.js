const e = require("cors");

n = 10;

let answer = 0;

let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(i);
}

console.log(arr);

for (let i = 0; i <= arr.length; i++) {
  let num = arr[i] / 2;
  if (num % 1 === 0) {
    arr.pop(arr[i]);
  }
}
console.log("중간값", arr);

let newarr = [];
for (let i = 0; i <= arr.length; i++) {
  let num = arr[i] / 3;
  console.log(arr[i], num);
  if (num % 1 !== 0) {
    console.log("이거 답");
    newarr.push(arr[i])
  } else {
    console.log("이거 빼야함");
  }
}
console.log(newarr);
