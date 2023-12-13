// 문제 설명

// 자연수 N의 각 자릿수의 합을 구해서 return 해주세요.

// 입출력 예
// N : 123 / answer : 6
// N : 987	/ answer : 24


var n=123;

var answer = 0;

// 각각의 자릿수를 구해야 하기 때문에 숫자를 문자로 바꿔주었습니다.
n = n.toString();

// 반복문을 이용해서 각 자릿수에 있는 숫자를 더해줍니다.
for(let i=0; i<n.length; i++){
    answer += Number(n[i]);
}

console.log(answer)