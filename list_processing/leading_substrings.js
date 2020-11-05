// Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

const leadingSubstrings = function leadingSubstrings(str) {
  const substrings = [];

  for (let i = 1; i <= str.length; i += 1) {
    substrings.push(str.slice(0, i));
  }

  return substrings;
}

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));