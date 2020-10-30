// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

const doubleConsonants = function doubleConsonants(text) {
  const pattern = /[^aeiou]/i;
  const result = [];
  
  for (let i = 0; i < text.length; i += 1) {
    if (text[i].match(pattern)) {
      result.push(text[i], text[i]);
    } else {
      result.push(text[i]);
    }
  }

  return result.join('');
}


console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));