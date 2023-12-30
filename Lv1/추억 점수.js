// let names = ["may", "kein", "kain", "radi"];
let name = ["kali", "mari", "don"];

// let yearning = [5, 10, 1, 3];
let yearning = [11, 1, 55];

// let photo = [
//   ["may", "kein", "kain", "radi"],
//   ["may", "kein", "brin", "deny"],
//   ["kon", "kain", "may", "coni"],
// ];
let photo = [
  ["kali", "mari", "don"],
  ["pony", "tom", "teddy"],
  ["con", "mona", "don"],
];

let answer = [];
let obj = [];

for (let i = 0; i < name.length; i++) {
  console.log(name[i], yearning[i]);
  obj.push([name[i], yearning[i]]);
}
console.log(typeof(obj))

for (let i = 0; i < photo.length; i++) {
  let num = 0;
  for (let j = 0; j < photo[i].length; j++) {
    for (let k = 0; k < obj.length; k++) {
      photo[i][j] === obj[k][0] ? num += obj[k][1] : num += 0;
    }
  }
  answer.push(num);
}

console.log(answer)