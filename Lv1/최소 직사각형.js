let sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

let answer = 0;
let arr = [];
let maxarr = [];
let minarr = [];

sizes.forEach((s) =>
  s[0] > s[1] ? arr.push([s[0], s[1]]) : arr.push([s[1], s[0]])
);

arr.forEach(([num1, num2]) => {
  maxarr.push(num1);
  minarr.push(num2);
});
console.log(arr);
answer = Math.max(...maxarr) * Math.max(...minarr);

console.log(answer);
