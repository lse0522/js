let a = 3;
let b = 5;
// let a = 3;
// let b = 3;
// let a = 5;
// let b = 3;

let answer = 0;

if (a > b) {
  for (let i = b; i <= a; i++) {
    answer += i;
  }
} else {
  for (let i = a; i <= b; i++) {
    answer += i;
  }
}
console.log(answer);
