let array = [1, 2, 7, 10, 11];
let answer = 0;

array = array.sort((a, b) => a - b);

answer = array[Math.floor(array.length / 2)]

console.log(answer)