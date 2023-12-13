var n = 12;

var answer = 0;
for (let i = 1; i < n + 1; i++) {
  if (n % i === 0) {
    answer += i;
  }
}
console.log(answer);
