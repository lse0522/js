// let X = "100";
let X = "5525";
// let X = "12321";
// let X = "100";

// let Y = "2345";
let Y = "1255";
// let Y = "42531";
// let Y = "203045";

let answer = "";
X = X.split("").sort();
Y = Y.split("").sort();

let arr = [];

// for (let i = 0; i < X.length; i++) {
//   if (Y.includes(X[i])) {
//     arr.push(X[i])
//     Y.splice(Y.indexOf(X[i]),1)
//   } else {
//     console.log("없음");
//   }
// }
// 개선된 공통 숫자 찾기 로직
// X.forEach(x => {
//   let index = Y.indexOf(x);
//   if (index !== -1) {
//     arr.push(x);
//     Y.splice(index, 1);
//   }
// });
let YSet = new Set(Y);
X.forEach(x => {
  if (YSet.has(x)) {
    arr.push(x);
    YSet.delete(x);
  }
});


// 0으로만 구성된 경우 처리 추가
if (arr.length === 0) {
    answer = "-1";
  } else if (arr.every(val => val === "0")) {
    answer = "0";
  } else {
    answer = arr.sort((a, b) => b - a).join("");
  }

console.log(arr);


// 시간초과