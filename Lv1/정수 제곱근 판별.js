// 문제 설명

// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 한다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고,
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 입출력 예
// n : 121 / return : 144
// n : 3 / return : -1

// var n = 121;
var n = 3;

console.log(Math.sqrt(n))
console.log( n % Math.sqrt(n))

// Math.sqrt()함수는 숫자의 제곱근을 반환합니다. 따라서 n의 제곱근을 반환 해주고
// 그 값이 정수 x의 제곱이라면 x+1의 제곱을 리턴하고,
// 아니면 -1을 출력해 줍니다.

{
    n % Math.sqrt(n) === 0 ? answer = ((Math.sqrt(n)+1) * (Math.sqrt(n)+1)) : answer = -1
}

answer = ( n % Math.sqrt(n) === 0 )? ((Math.sqrt(n)+1) * (Math.sqrt(n)+1)) : -1 

console.log(answer)
