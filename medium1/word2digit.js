// Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

const word2digit = function word2digit(text) {
  const digits = 
    ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let result = [];
  
  text.split(/\b/).forEach(word => {
    let index = digits.indexOf(word);
    if (index !== -1) {
      word = String(index);
    }
    result.push(word);
  });

  return result.join('');
}

console.log(word2digit('Please call me at five five five one two three four. Thanks.'));