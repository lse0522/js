let d = [1,3,2,5,4];
let budget = 9;

let answer = 0;

d = d.sort();

let count = 0;
    
for(let i = 0; i < d.length; i++) {
    if(d[i] > budget) break;

    budget -= d[i];
    count += 1;
}
console.log(count)