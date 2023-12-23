let arr = [1,1,3,3,0,1,1];
// let arr = [4,4,4,3,3];

let answer = [];


answer = arr.filter((num, index) => num !== arr[index + 1]);

console.log(answer)