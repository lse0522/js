

let absolutes = [4,7,12];
let signs = [true,false,true];
let answer = 0;

for(let i=0; i<absolutes.length; i++){
    signs[i]  ? answer += absolutes[i] : answer += - absolutes[i] ;
}

console.log(answer)