// let lottos = [44, 1, 0, 0, 31, 25];
let lottos = [0, 0, 0, 0, 0, 0];
// let lottos = [45, 4, 35, 20, 3, 9];

// let win_nums = [31, 10, 45, 1, 6, 19];
let win_nums = [38, 19, 20, 40, 15, 25];
// let win_nums = 	[20, 9, 3, 45, 4, 35]

// [최고 , 최저]
let answer = [];

let max = 6;
let min = 6;
let count = 0;
let zero = 0;

for (let i = 0; i < lottos.length; i++) {
  if (win_nums.includes(lottos[i])) {
    count++;
  } else if (lottos[i] === 0) {
    zero++;
  }
}

console.log(count, zero);

for (let i = 1; i <= 6; i++) {
  if (count + zero === max) {
    console.log("더한값", count + zero);
    answer.push(i);
  }
  max--;
}

for (let i = 1; i <= 6; i++) {
  if (count === min) {
    console.log("최저", count);
    answer.push(i);
  }else if(count === 0){
    answer.push(6);
  }
  min--;
  if(answer.length === 2){
    break;
  }
}

console.log(answer);
