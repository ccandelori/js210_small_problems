function staggeredCase(string) {
  let capitalize = false;
  
  return string.split('').map(char => {
    if (/[a-z]/i.test(char)) {
      capitalize = !capitalize;
      return capitalize ? char.toUpperCase() : char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"