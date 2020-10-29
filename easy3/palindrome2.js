const isRealPalindrome = function isRealPalindrome(text) {
  let lowerText = text.toLowerCase().replace(/\W/g, '');
  let fixed = lowerText.split('').reverse().join('').replace(/\W/g, '');;
  return lowerText === fixed;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

