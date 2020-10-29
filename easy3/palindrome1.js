const isPalindrome = function isPalindrome(text) {
  const len = Math.ceil(text.length/2);
  
  for (let i = 0, j = text.length - 1; i < len; i += 1, j -= 1) {
    if (text[i] !== text[j]) {
      console.log(`${text[i]} ${text[j]}`)
      return false;
    }
  }

  // return string === string.split('').reverse().join('');

  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true