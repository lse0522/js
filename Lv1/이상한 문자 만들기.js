let s = "try hello world";

let answer = "";

let strarr = s.split(" ");
console.log(strarr)


for (let i = 0; i < strarr.length; i++) {
  for (let j = 0; j < strarr[i].length; j++) {
    j % 2 === 0
      ? (answer += strarr[i][j].toUpperCase())
      : (answer += strarr[i][j].toLowerCase());
  }
  if (i < strarr.length - 1) {
    answer += " ";
  }
}

console.log(answer);

