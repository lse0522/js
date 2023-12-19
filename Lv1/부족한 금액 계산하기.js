let price = 3;
let money = 20;
let count = 4;
let answer = 0;


for(let i=1; i<=count; i++){
    answer += price * i;
}

answer = answer < money ? 0 : answer - money ;

