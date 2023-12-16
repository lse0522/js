let num = 6;
// let num = 16;
// let num = 626331;

let answer = 0;

while (num !== 1) {
  if (answer === 500) {
    return -1;
  }

  num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  answer++;
}
console.log("카운트 수", answer);
