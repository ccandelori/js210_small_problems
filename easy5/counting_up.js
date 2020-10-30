// Write a function that takes an integer argument, and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

// You may assume that the argument will always be a positive integer.

const sequence = function sequence(len) {
  const result = [];
  
  for (let i = 1; i <= len; i += 1) {
    result.push(i);
  }

  return result;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));