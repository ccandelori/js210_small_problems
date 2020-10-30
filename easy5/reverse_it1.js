const reverseIt = function reverseIt(text) {
  return text.split(' ').reverse().join(' ');
}

console.log(reverseIt(''));
console.log(reverseIt('Hello World'));
console.log(reverseIt('Reverse these words'));