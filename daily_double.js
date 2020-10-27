let crunch = function crunch(string) {
  let previous_character = '';
  let dedoubled = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === previous_character) {
      continue;
    } else {
      dedoubled += string[i];
      previous_character = string[i];
    }
  }

  return dedoubled;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""