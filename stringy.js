// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

const stringy = function stringy(num) {
  let string = '';
  
  for(let i = 1; i <= num; i += 1) {
    string += `${i % 2}`;
  }

  return string;
}

// Stolen from John Isom:
// const stringy = n => '10'.repeat(n / 2) + (n % 2 === 1 ? '1' : '');

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));