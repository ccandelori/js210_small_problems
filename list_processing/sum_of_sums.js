// Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. You may assume that the array always contains at least one number.

const sumOfSums = function sumOfSums(numbers) {
  let sum = 0;

  for (let i = numbers.length - 1, j = 1; i >= 0; i -= 1, j += 1) {
    sum += (numbers[i] * j); 
  }

  return sum;

  //return numbers.map((number, idx) => numbers.slice(0, idx + 1)
                                             // .reduce((sum, value) => sum + value))
                                             // .reduce((sum, value) => sum + value);
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));;