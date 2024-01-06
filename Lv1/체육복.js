let n = 5;
// let n = 3;

let lost = [2, 4];
// let lost = [3];

let reserve = [1, 3, 5];
// let reserve = [3]
// let reserve = [1];

let answer = 0;

let count = 0;

let realLost=lost.filter((l)=>!reserve.includes(l));
let realReserve=reserve.filter((r)=>!lost.includes(r));

answer+=lost.length-realLost.length;

realLost.sort((a,b)=>a-b);

realLost.forEach((l)=>{
    if(realReserve.length===0){
        return;
    }
    
    if(realReserve.includes(l-1)){
        realReserve=realReserve.filter((r)=>r!==l-1);
        answer++;
    }
    else if(realReserve.includes(l+1)){
        realReserve=realReserve.filter((r)=>r!==l+1);
        answer++;
    }
    
})


console.log(answer);
