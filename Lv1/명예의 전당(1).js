let k = 3;
let score = [10, 100, 20, 150, 1, 100, 200];

let answer = [];
let arr = [];


for (let i = 0; i < score.length; i++) {

  // 새로운 배열에 값을 저장해 줍니다.
  arr.push(score[i]);

  // 배열을 내림차순으로 정렬 합니다.
  arr.sort((a, b) => b - a);

  // 아직 명예의 전당이 나타나지 않을 경우
  // 현재 배열에서 가장 낮은 순위의 요소를 추가해 줍니다.
  if (arr.length < k) {
    answer.push(arr[arr.length - 1]);
  
  // 만약 명예의 전당이 나타날수 있다면 
  // k번째 요소를 추가해 줍니다.
  } else {
    answer.push(arr[k - 1]);
  }
}

console.log(answer);
