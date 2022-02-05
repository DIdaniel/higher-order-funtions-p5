const arr = [5, 4, 9, 2, 1];
const sentence = "It was a dark and stormy night.";
const words = sentence.split(/\W+/).filter((w) => w.length);
console.log(words);
// function isEven(num) {
//   return !(num % 2); // 짝수
// }

const myfilter = arr.filter((x) => !(x % 2));
console.log(myfilter);
