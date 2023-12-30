// let nums = [3,1,2,3];
let nums = [3,3,3,2,2,4];
// let nums = [3,3,3,2,2,2];


let answer = 0;

let length = (nums.length)/2;

//  ES6에서 추가된 기능
// 중복되지 않은 데이터의 집합
nums = [...new Set(nums)];


console.log("길이", length, "숫자", nums.length);

// 2 / 3
if( length > nums.length){
    answer = nums.length;
}else{
    console.log(length)
    answer = length;
}
console.log(answer)