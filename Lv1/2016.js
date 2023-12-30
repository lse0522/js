let a = 5;
let b = 24;

let answer = "";


let week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
let monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let day = 0;

for(let i=0; i<a -1; i++){
    day += monthDays[i];
}

day += b - 1; 

answer = week[day % 7];

console.log(answer)