
let numbers = [1, 2, 3, 4, 6, 7, 8, 0];
let answer = 0;

let arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let newarr = arr.map((num) =>  numbers.includes(num) === false ? answer += num : null);

console.log(answer)