const featured = function featured(num) {
  const MAX_FEATURED = 9876543201;
  let featured = num;

  while (featured % 2 === 0 || featured % 7 !== 0) {
    featured += 1;
  }

  if (isValid(featured)) {
    return featured;
  } else {
    while (featured < MAX_FEATURED) {
      featured += 14;
      
      if (isValid(featured)) {
        return featured;
      }
    }

    return "There is no next featured number";
  }
}

function isValid(num) {
  let digits = String(num).split('');
  let uniqueDigits = [...new Set(digits)];

  if (uniqueDigits.length === digits.length) {
    return true;
  }
}

console.log(featured(12));
console.log(featured(20));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
console.log(featured(999999));
console.log(featured(999999987));
