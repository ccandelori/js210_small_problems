// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

const multiplyAllPairs = function multiplyAllPairs(left, right) {
  const results = [];

  for (let i = 0; i < right.length; i += 1) {
    for (let j = 0; j < left.length; j += 1) {
      results.push(left[j] * right[i]);
    }
  }

  // left.forEach(number1 => {
  //   right.forEach(number2 => {
  //     result.push(number1 * number2);
  //   });
  // });

  return results.sort((left, right) => left - right);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));