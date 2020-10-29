// Write a function that takes a string consisting of one or more space separated words, and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

const wordSizes = function wordSizes(text) {
  const wordCount = {};
  const words = text.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    let len = words[i].length;
    wordCount[len] === undefined ? wordCount[len] = 1 : wordCount[len] += 1;
  }

  return wordCount;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));