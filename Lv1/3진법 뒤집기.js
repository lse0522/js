let n = 45;
// let n = 125;


let answer = 0;

let arr = [];

// n=n.toString(3);
arr = n.toString(3).split('');
console.log(arr)

arr.map((num, index) => answer += num * (3 ** [index]))

console.log(answer)