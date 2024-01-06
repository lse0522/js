const fs = require("fs");

// const [n, ...input] = fs
//   .readFileSync("백준/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

const [n, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");


  let newarr = [];
  let arr = [];
  let answer = [];
  
  for (let i = 0; i < input.length; i++) {
    newarr.push(input[i].split(" "));
  }
  
  for (let i = 0; i < newarr.length; i++) {
    if (newarr[i][0] === "push") {
      arr.unshift(newarr[i][1]);
    } else if (newarr[i][0] === "pop") {
      arr.length === 0 ? answer.push(-1) : (answer.push(arr[0]), arr.shift())
    } else if (newarr[i][0] === "top") {
      answer.push(arr.length === 0 ? -1 : arr[0]);
    } else if (newarr[i][0] === "size") {
      answer.push(arr.length);
    } else if (newarr[i][0] === "empty") {
      answer.push(arr.length === 0 ? 1 : 0);
    }
  }
  
  console.log(answer.join('\n'));
