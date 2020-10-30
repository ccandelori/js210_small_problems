// Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

const centerOf = function centerOf(text) {
  if (text.length === 1) {
    return text;
  }

  let center = Math.ceil(text.length / 2) - 1;

  if (text.length % 2 === 0) {
    return text.slice(center, center + 2);
  } else {
    return text[center];
  }
}

console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));