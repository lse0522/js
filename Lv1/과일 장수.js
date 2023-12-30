let k = 4;
// let k = 3;

// let m = 4;
let m = 3;

// let score = [1, 2, 3, 1, 2, 3, 1];
let score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

let answer = 0;

// 내림차순 정렬
score.sort((a, b) => b - a);

// 각 그룹에 대해 최소값을 곱하여 더하기
for (let i = 0; i < score.length; i += m) {
  if (i + m <= score.length) {
    // 현재 배열의 길이가 m이여야 한다.
    answer += Math.min(...score.slice(i, i + m)) * m;
  }
}

console.log(answer);
