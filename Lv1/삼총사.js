let number = [-2, 3, 0, 2, -5];
let answer = 0;


for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer ++ ;
        }
      }
    }
  }


  console.log(answer)