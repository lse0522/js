let s = "Zbcdefg";
let answer = '';


s = s.split('');
console.log(s);

s = s.sort().reverse();
answer = s.reduce((a,b) => a+b)

console.log(answer)