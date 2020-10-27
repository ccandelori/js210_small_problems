// Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

const getCentury = function getCentury(year) {
  const ordinals = ['st', 'nd', 'rd', 'th'];
  century = String(Math.ceil(year / 100));

  if (century.includes('11') || century.includes('12') || century.includes('13')) {
    return `${century}${ordinals[3]}`;
  }

  switch(century.charAt(century.length - 1)) {
    case '1': return `${century}${ordinals[0]}`;
    case '2': return `${century}${ordinals[1]}`;
    case '3': return `${century}${ordinals[2]}`;
    default: return `${century}${ordinals[3]}`;
  }
}

console.log(getCentury(2000));
console.log(getCentury(2001));
console.log(getCentury(1965));
console.log(getCentury(256));
console.log(getCentury(5));
console.log(getCentury(10103));
console.log(getCentury(1052));