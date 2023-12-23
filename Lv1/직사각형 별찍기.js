let a = 5;
let b = 3;

let answer = "";

for (let i = 0; i < b; i++) {
    for (let i = 0; i < a; i++) {
        answer += "*";
    }
    answer += "\n";
}
console.log(answer);