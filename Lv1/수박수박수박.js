// const n = 3;
const n = 4;

let answer = "";


for (let i = 0; i < n; i++) {
  i % 2 === 0 ? answer += "수" : answer += "박";
}
console.log(answer)
