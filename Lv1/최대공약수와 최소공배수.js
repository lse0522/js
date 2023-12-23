let n = 3;

let m = 12;


let answer = [];

while (m !== 0) {
    let t = m;
    m = n % m;
    n = t;
}
console.log(n, m)

