// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is.
"use strict";

const twice = function twice(number) {
  const numString = String(number);
  const len = numString.length

  for(let i = 0, j = len/2; i < len/2; i++, j++) {
    if (numString[i] !== numString[j]) {
      return number * 2;
    }
  }

  return number;
}


// Probably better solution
//
// function twice(number) {
//   if (isDoubleNumber(number)) {
//     return number;
//   } else {
//     return number * 2;
//   }
// }

// function isDoubleNumber(number) {
//   const stringNumber = String(number);
//   const center = stringNumber.length / 2;
//   const leftNumber = stringNumber.substring(0, center);
//   const rightNumber = stringNumber.substring(center);

//   return leftNumber === rightNumber;
// }

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));