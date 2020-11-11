const letterPercentages = function letterPercentages(text) {
  let ratio = {'lowercase': 0, 'uppercase': 0, 'neither': 0,};

  for (let i = 0; i < text.length; i += 1) {
    if (text[i].match(/[A-Z]/)) {
      ratio['uppercase'] === undefined ? ratio['uppercase'] = 1 : ratio['uppercase'] += 1;
    } else if (text[i].match(/[a-z]/)) {
      ratio['lowercase'] === undefined ? ratio['lowercase'] = 1 : ratio['lowercase'] += 1;
    } else {
      ratio['neither'] === undefined ? ratio['neither'] = 1 : ratio['neither'] += 1;
    }
  }

// function letterPercentages(string) {
//   const count = string.length;
//   return {
//     lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
//     uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
//     neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2),
//   };
// }

  return ratio;
}

console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));