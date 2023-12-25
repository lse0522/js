let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

let answer = [];

let num1 = 0;
let num2 = 0;
let num3 = 0;

for (let i = 0; i < commands.length; i++) {
  console.log(commands[i]);
  for (let j = 0; j < commands[i].length; j++) {
    console.log(commands[i][j])
      i = commands[i][j];
      j = commands[i][j];
      k = commands[i][2];
  }
}
