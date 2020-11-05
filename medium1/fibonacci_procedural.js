const fibonacci = function fibonacci(n) {
  let fib = 1;

  if (n < 3) {
    return fib;
  }

  let first = 1;
  let second = 1;

  for (i = 3; i <= n; i += 1) {
    fib = first + second;
    first = second;
    second = fib;
  }

  return fib;
}

// Better answer, maybe
// function fibonacci(nth) {
//   let previousTwo = [1, 1];

//   for (let counter = 3; counter <= nth; counter += 1) {
//     previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
//   }

//   return previousTwo[1];
// }

console.log(fibonacci(20));
console.log(fibonacci(40));
console.log(fibonacci(75));