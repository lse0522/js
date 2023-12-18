let arr = [5, 9, 7, 10];
// let arr = [2, 36, 1, 3];
// let arr = [3,2,6];

let divisor = 5;
// let divisor = 1;
// let divisor = 10;

let answer = [];


arr.map((index) => index % divisor===0 ?answer.push(index) : null );
console.log(answer)

answer.length === 0 ? answer=[-1] : answer.sort((a,b) =>  a-b);
console.log(answer)