// let answers = [1, 2, 3, 4, 5];
let answers = [1, 3, 2, 4, 2];

let answer = [];

let ans1 = [1, 2, 3, 4, 5]; // 2
let ans2 = [2, 1, 2, 3, 2, 4, 2, 5]; // 2
let ans3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 2

let num1 = 0;
let num2 = 0;
let num3 = 0;

for (let i = 0; i < answers.length; i++) {
  if (ans1[i] === answers[i]) {
    num1++;
  }
}
for (let i = 0; i < answers.length; i++) {
  if (ans2[i] === answers[i]) {
    num2++;
  }
}
for (let i = 0; i < answers.length; i++) {
  if (ans3[i] === answers[i]) {
    num3++;
  }
}

answer.push(num1, num2, num3);

for (let i = 0; i < answer.length; i++) {
  if (Math.max(...answer) === answer[i]) {
    console.log(answer[i], "가 제일 많음");
    answer[i] = 1;
  } else if (Math.min(...answer) === answer[i]) {
    console.log(answer[i], "가 제일 많음");
    answer[i] = 3;
  }else {
    answer[i] = 2;
  }
}

for(let i=0; i<answer.length; i++){
  if(answer[i] === answer[i+1] === answer[i+2]){
    console.log("모두 같음 ")
  }
}

console.log(answer);