function letterCaseCount(string) {
  let letters = string.split('');

  return {
    lowercase: letters.filter(char => /[a-z]/.test(char)).length,
    uppercase: letters.filter(char => /[A-Z]/.test(char)).length,
    neither: letters.filter(char => /[^A-Za-z]/.test(char)).length,
  };
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));