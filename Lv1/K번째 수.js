let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

let answer = [];

let newarr = [];


for (let i = 0; i < commands.length; i++) {
  newarr = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b);
  answer.push(newarr[commands[i][2] -1]);
}
console.log(answer)