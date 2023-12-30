// let n = 8;
// let n = 5;
let n = 4;

// let m = 4;
// let m = 4;
let m = 1;

// let section = [2, 3, 6];
// let section = [1, 3];
let section = [1, 2, 3, 4];

let answer = 0;

let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(i);
}

for (let i = 0; i < arr.length; i++) {
  if (section.includes(arr[i])) {
    for (let j = 0; j < m; j++) {
      if (arr[i + j] !== 0) {
        arr[i + j] = 0;
        answer++;
      }
    }
  }
}

console.log(arr, answer);
