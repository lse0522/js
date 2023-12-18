let arr = [4,3,2,1];
// let arr = [10];
let answer = [];



arr.length > 1 ? answer =  arr.filter((el) =>  el !== Math.min(...arr)) : answer = [-1];
console.log(answer)