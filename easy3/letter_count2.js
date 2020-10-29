// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

const wordSizes = function wordSizes(text) {
  const wordCount = {};
  const words = text.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    let len = words[i].replace(/\W/g, '').length;
    
    if (len === 0) {
      continue;
    }

    wordCount[len] === undefined ? wordCount[len] = 1 : wordCount[len] += 1;
  }

  return wordCount;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));