// 전체 스테이지의 개수 N
// let N = 5;
let N = 4;

// 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
// let stages = [2, 1, 2, 6, 2, 4, 3, 3];
let stages = [4, 4, 4, 4, 4];

let answer = [];

let arr = [];
let s = stages.length;

// for (let i = 0; i < stages.length; i++) {
//   let num = 0;
//   num = stages.filter((num) => num === i);
//   let lenght = num.length;
//   num = num.length / s;
//   arr.push([i, num]);
//   s = s - lenght;
//   if (arr.length === N) {
//     break;
//   }
// }

for (let i = 1; i <= N; i++) {
  let stageCount = stages.filter((stage) => stage === i).length;
  let failureRate = stageCount / s;
  s -= stageCount;
  arr.push([i, failureRate]);
}

arr.sort((a, b) => b[1] - a[1]);
answer = arr.map((subArray) => subArray[0]);

console.log(answer);
