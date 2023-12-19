let s = "a234";
// let s="1234";

let answer = (s.length === 4 || s.length === 6) && /^\d+$/.test(s);
console.log(answer);