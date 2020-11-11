const sumSquareDifference = function sumSquareDifference(num) {
  let sum = 0;  
  let sumSquare = 0;

  for(let i = 1; i <= num; i += 1) {
    sum += i;
    sumSquare += i ** 2;
  }

  return (sum ** 2) - sumSquare;
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));