const isPalindrome = function isPalindrome(text) {
  return text === text.split('').reverse().join('');
}

const isPalindromicNumber = function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

