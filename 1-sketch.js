function multiplier(factor) {
  return (x) => x * factor;
}

let doubler = multiplier(2);
console.log(doubler(5)); // 10

let tripler = multiplier(3);
console.log(tripler(5)); // 15
