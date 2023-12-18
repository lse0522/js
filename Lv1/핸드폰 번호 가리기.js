let phone_number = "01033334444";
let answer = '';
let newstr = "";

for(let i=0; i<phone_number.length -4; i++){
    answer += "*";
}

answer += phone_number.slice(-4);
console.log(answer)