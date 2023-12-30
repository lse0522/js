let number = 5;
let limit = 3;
let power = 2;

let answer = 0;

let arr = [];

for (let i = 1; i <= number; i++) {
  let num = i;
  console.log(num)
  for (let j = 1; j < num; j++) {
    if (num % j === 0) {
      arr.push(j);
    }
  }

}


console.log(arr);
