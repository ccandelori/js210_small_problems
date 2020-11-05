"use strict";

const palindromes = function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}

const isPalindrome = function isPalindrome(str) {
  return str.length > 1 && str === str.split('').reverse().join('');
}

const leadingSubstrings = function leadingSubstrings(str) {
  const substrings = [];

  for (let i = 1; i <= str.length; i += 1) {
    substrings.push(str.slice(0, i));
  }

  return substrings;
}

const substrings = function substrings(str) {
  let substrings = [];

  for (let i = 0; i < str.length; i += 1) {
    let substring = str.substring(i);
    substrings = substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));