let babbling = ["aya", "yee", "u", "maa"];
let strarr = ['aya','ye','woo','ma'];

let answer = 0;

    
for(let i = 0; i < babbling.length; i++){
    let babble = babbling[i];
    
    for(let j = 0; j < strarr.length; j++){
        if(babble.includes(strarr[j].repeat(2))){
            break;
        }
        
        babble = babble.split(strarr[j]).join(" ");
    }
    
    if(babble.split(" ").join("").length === 0){
        answer += 1;
    }
}

console.log(answer)