// Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

const digitList = function digitList(nums) {
  return String(nums).split('').map(element => parseInt(element));
  
  // Below taken from Gabriel De Almeida
  // return [...String(num)].map(Number);
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));