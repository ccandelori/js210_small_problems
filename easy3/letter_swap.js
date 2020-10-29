// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

const swap = function swap(text) {
  if (text.length === 1) {
    return text;
  }

  const words = text.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];
    if (word.length === 1) { continue; }
    words[i] = word[word.length - 1] + word.slice(1, -1) + word[0];
  }

  return words.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));