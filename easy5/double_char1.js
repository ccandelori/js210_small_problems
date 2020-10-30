// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

const repeater = function repeater(str) {
  let result = [];
  
  for (let i = 0; i < str.length; i += 1) {
    result.push(str[i], str[i]);
  }

  return result.join('');
}

console.log(repeater('Hello'));
console.log(repeater('Good Job!'));
console.log(repeater(''));
