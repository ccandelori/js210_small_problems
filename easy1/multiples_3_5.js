function multisum(number) {
  let sum = 0;

  for (let i = 1; i <= number; number++) {
    if (number % 3 === 0 || number % 5 === 0) {
      sum += number;
    }
  }
  
  return sum;
}