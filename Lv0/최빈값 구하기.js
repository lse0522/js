// let array = [1, 2, 3, 3, 3, 4];
let array = [1, 1, 2, 2];

let answer = 0;

let arr = [...new Set(array)];
console.log(arr);

let sumarr = [];

for (let i = 0; i < arr.length; i++) {
  sumarr.push([arr[i],array.filter((num) => num === arr[i]).length]);
}
console.log(sumarr);

let maxArray = sumarr.reduce((max, current) => {
    return max[1] > current[1] ? max : current;
});

console.log(maxArray);
