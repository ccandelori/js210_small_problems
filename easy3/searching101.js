// Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.
"use strict";

var rlSync = require('readline-sync');
const numbers = [];

numbers.push(rlSync.question("Enter the 1st number: "));
numbers.push(rlSync.question("Enter the 2nd number: "));
numbers.push(rlSync.question("Enter the 3rd number: "));
numbers.push(rlSync.question("Enter the 4th number: "));
numbers.push(rlSync.question("Enter the 5th number: "));

let last = rlSync.question("Enter the last number: ");

if (numbers.indexOf(last) !== -1) {
  console.log(`${last} appears in [${numbers}]`);
} else {
  console.log(`${last} does not appear in [${numbers}]`);
}