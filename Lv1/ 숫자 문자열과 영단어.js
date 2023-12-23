let s = "one4seveneight";
let answer = 0;

let numberarr = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

Object.keys(numberarr).forEach(key => {
    s = s.replace(new RegExp(numberarr[key], "g"), key);
  });

  answer = Number(s)
  console.log(answer)