let nums = [1, 2, 3, 4];
// let nums = [1, 2, 7, 6, 4];

let answer = 0;

let arr = [];

for (let i = 0; i < nums.length - 2; i++) {
  for (let j = i + 1; j < nums.length - 1; j++) {
    for (let k = j + 1; k < nums.length; k++) {
      arr.push(nums[i] + nums[j] + nums[k]);
    }
  }
}
console.log(arr);

// 1과 자기 자신으로만 나누어지는 수가 소수이다.
for (let i = 0; i < arr.length; i++) {
    Math.sqrt(arr[i])
    console.log(arr[i], Math.floor(Math.sqrt(arr[i])));
}
