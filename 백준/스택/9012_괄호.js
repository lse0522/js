const fs = require("fs");

const [n, ...input] = fs
  .readFileSync("백준/input.txt")
  .toString()
  .trim()
  .split("\n");

// console.log(input);

let arr = [];

let newarr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input[i].split(""));
}

console.log(arr[0]);

for (let i = 0; i < arr.length; i++) {
  if (arr[0][i] === "(" && arr[0][i + 1] === ")") {
    console.log(arr[0][i], arr[0][i + 1], "괄호");
  }else{
    console.log("괄호 없음")
  }
}
