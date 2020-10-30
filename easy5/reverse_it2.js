// Write a function that takes a string argument containing one or more words, and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

const reverseWords = function reverseWords(text) {
  const MAXLEN = 5;
  let words = text.split(' ');


  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > MAXLEN) {
      words[i] = words[i].split('').reverse().join('');
    }
  }

  return words.join(' ');
}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));