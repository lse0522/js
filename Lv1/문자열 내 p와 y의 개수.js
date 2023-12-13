// 문제 설명

// 대문자와 소문자가 섞여있는 문자열 s에서 'p'의 개수와 'y'의 개수를 비교해
// 같으면 true, 다르면 false를 return 해주세요.

// 'p', 'y' 모두 하나도 없는 경우는 항상 true를 리턴합니다.
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 입출력 예
// s : "pPoooyY" /	answer : true
// s : "Pyy" /	answer : false

var s = "pPoooyY";

var answer = true;

// p와 y는 대소문자를 구별하지 않기 때문에 문자열에 있는 알파벳을 모두 대문자로 바꾸어 주었습니다.
s = s.toUpperCase();

// p,y의 개수를 저장할 변수 추가
var pnum = 0;
var ynum = 0;

for (let i = 0; i < s.length; i++) {
  // 삼항연산자를 이용해서 s[i]가 p이면 pnum++, s[i]가 y이면 ynum++ 둘다 아니면 null을 해줍니다.
  {
    s[i] === "P" ? pnum++ : s[i] === "Y" ? ynum++ : null;
  }
}

// 삼항연산자를 이용해서 pnum와 ynum가 같다면 true, 같지 않다면 false를 해줍니다.
{
  pnum === ynum ? (answer = true) : (answer = false);
}

console.log(answer);
