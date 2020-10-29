// Write a function that takes one argument, an array containing integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.
"use strict";

const average = function average(num_array) {
  let result = 0;

  for (let i = 0; i < num_array.length; i += 1) {
    result += num_array[i];
  }

  return parseInt(result / num_array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));