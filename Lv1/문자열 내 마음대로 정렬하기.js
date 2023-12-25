let strings = ["sun", "bed", "car"];

let n = 1;

let answer = [];

console.log(strings);

let newarr = [];

for (let i = 0; i < strings.length; i++) {
  newarr.push([strings[i][n], strings[i]]);
}

console.log(newarr.sort());

for (let i = 0; i < newarr.length; i++) {
  answer.push(newarr[i][1]);
}

console.log(answer);
