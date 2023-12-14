// 문제 설명

// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수를 완성해주세요.

// 입출력 예
// x : 10 / return : true
// x : 11 / return : false

// var x = 10;
var x = 11;

var answer = true;

// 자릿수의 합을 구해야 하기 때문에 문자로 x를 바꿔주어 2개의 문자로 나눠주어 배열에 저장해준다.
var arr = x.toString().split('');
console.log(arr)

// 누산기가 포함 되어있는 reduce를 통해 배열의 값을 다 더해준다.
var sum = arr.reduce((acc, cur) => {return acc + Number(cur)}, 0);



// {
//     x%sum === 0 ? answer = true : answer = false
// }

// 만약 하다스 수 이면 true, 아니면 false을 출력해줍니다.
answer = (x % sum === 0 )? true : false;
console.log(answer);
