let ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
// let ingredient = [1, 3, 2, 1, 2, 1, 3, 1, 2];

let count = 0;

for (let i = 0; i < ingredient.length; i++) {
  console.log(ingredient[i]);
  // 햄버거 만들기 시작
  if (ingredient[i] === 1) {
    for (let j = i; j < ingredient.length; j++) {
      console.log("햄버거 재료", ingredient[j]);
      
    }
  }
}
