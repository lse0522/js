let s = "aukks";
let skip = "wbqd";
let index = 5;

let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let arr = [];

for (let i = 0; i < skip.length; i++) {
  arr.push(skip[i].charCodeAt());
}
console.log(arr)

// skip 값 빼기
alphabet = alphabet.filter((str) => !arr.includes(str));


let newstr = [];

for (let i = 0; i < s.length; i++) {
  newstr.push(s[i].charCodeAt() + 5);
//   if()
}

console.log(newstr)