let s = "abcde";
// let s = "qwer";

let answer = '';

let mid = Math.floor(s.length/2);
answer = s.length % 2 === 0 ? s.slice(mid-1, mid+1) : s.slice(mid, mid+1);

console.log(answer)

