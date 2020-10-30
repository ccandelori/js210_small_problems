const reverseNumber = function reverseNumber(num) {
  return parseInt(String(num).split('').reverse().join(''), 10);
}

console.log(reverseNumber(12345));
console.log(reverseNumber(12000));
