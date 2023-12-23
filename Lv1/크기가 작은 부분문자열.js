let t = "3141592";
// let t = "500220839878";

let p = "271";
// let p = "7";

let answer = 0;
let arr = [];

for (let i = 0; i < t.length ; i++) {
  let num = "";
  for (let j = 0; j <  p.length; j++) {
    num += t[i + j];
    console.log( t[i + j])
  }
  arr.push(num);
}

arr = arr.filter((num) => Number(num) <= Number(p));

answer = arr.length;

console.log(answer)