const arr = [5, 4, 9, 2, 1];
let sum = 0;

for (let x of arr) {
  sum += x;
}
console.log("normal : ", sum);

/// reduce
const answer = arr.reduce((acc, cur) => acc + cur, 0);
console.log("reduce : ", answer);

/// reduce2
let biggest = arr.reduce((acc, cur) => (cur > acc ? cur : acc), 10);

console.log(biggest);
