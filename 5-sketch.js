const arr = [5, 4, 9, 2, 1];
console.log(arr);

const words = ["a", "hello", "C", "bye", "ß", 5, 2];
const obj = [
  { x: 2, y: 10 },
  { x: 6, y: 5 },
];

function compare(a, b) {
  return b.y - a.y;
}

// 오름차순 정리
arr.sort();
console.log(arr);

words.sort();
console.log(words);

obj.sort(compare);
console.log(obj);
