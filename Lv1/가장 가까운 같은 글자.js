let s = "banana";

let answer = [];

let str = [];

str = s.split("").reverse();
console.log(str);

let count = 0;

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
  console.log("\n");

  for (let j = i + 1; j < str.length; j++) {
    console.log(str[j]);
    if (str[i] === str[j]) {
      console.log("같은거 있음");
      count ++ ;
      break;
    } else {
        count ++ ;
      console.log("-1");
    }
    console.log("횟수",count)
    answer.push(count)
    count = 0;
  }
  console.log("\n");
}
console.log(answer)