const findFibonacciIndexByLength = function findFibonacciIndexByLength(len) {
  let a = 1;
  let b = 0;
  let temp;
  let index = 1;

  while (`${a}`.length !== len) {
    temp = a;
    a = a + b;
    b = temp;
    index += 1;
  }

  return index;
}

console.log(findFibonacciIndexByLength(2));
console.log(findFibonacciIndexByLength(10));
console.log(findFibonacciIndexByLength(16));