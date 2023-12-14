// 문제 설명

// 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.

// 입출력 예
// n : 118372 / return 873211

var n = 118372;

var answer = 0;

// n을 문자열로 바꿔 split을 이용해 문자열을 나눠줍니다.
var arr = n.toString().split("");
console.log(arr.sort().reverse().join(""))


// 배열을 오름차순으로 정렬을 한후, 배열의 순서를 반전합니다.
// join을 이용해 각각의 배열을 하나의 가
answer = Number(arr.sort().reverse().join(""));
console.log(typeof(answer))

