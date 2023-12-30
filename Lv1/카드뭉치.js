// let cards1 = ["i", "drink", "water"];
let cards1 = ["i", "water", "drink"];

// let cards2 = ["want", "to"];
let cards2 = ["want", "to"];

// let goal = ["i", "want", "to", "drink", "water"];
let goal = ["i", "want", "to", "drink", "water"];

let answer = "";

let str = "";

for (let i = 0; i < goal.length; i++) {
  if (cards1.includes(goal[i])) {
    str += cards1[0];
    cards1.shift();
  } else if (cards2.includes(goal[i])) {
    str += cards2[0];
    cards2.shift();
  }
}

answer = str === goal.join("") ? "Yes" : "No";

console.log(answer);
