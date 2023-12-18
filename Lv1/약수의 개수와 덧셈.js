let left = 13;
let right = 17;

let answer = 0;

let arr = [];
for (let i = left; i <= right; i++) {
    let num = Math.sqrt(i);
    arr.push(Number.isInteger(num) ? -i : i);
    console.log(num, Number.isInteger(num))
    
}

console.log(arr.map((n) =>  answer += n));
console.log(answer)

