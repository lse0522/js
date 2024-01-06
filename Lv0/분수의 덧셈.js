let numer1 = 1;
let denom1 = 2;
let numer2 = 3;
let denom2 = 4;

let answer = [];
let num = 0;

// 분자, 분모 더하기
let numer = numer1 * denom2 + numer2 * denom1;
let denom = denom1 * denom2;

console.log(numer, denom);

// 최대 공약수 구하기
while (denom != 0) {
  num = numer % denom;
  numer = denom;
  denom = numer;
  console.log(num);
}

// for (let i = 2; i < Math.min(answer[0], answer[1]); i++) {
//   if (answer[0] % i === 0 && answer[1] % i === 0) {
//     num = i;
//   }
// }

// 분자, 분모에서 최대 공약수 나누기
// answer[0] /= num;
// answer[1] /= num;

// console.log(answer);
