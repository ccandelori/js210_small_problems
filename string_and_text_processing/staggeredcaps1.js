function staggeredCase(string) {
  return string.split('').map((char, idx) => {
    return idx % 2 === 1 
         ? char.toLowerCase() 
         : char.toUpperCase();
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 444 nUmBeRs"