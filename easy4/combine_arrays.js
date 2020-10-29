// Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

const union = function union(left, right) {
  const result = [...left];

  for(let i = 0; i < right.length; i += 1) {
    if (result.indexOf(right[i]) === -1) {
      result.push(right[i]);
    }
  }

  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9])

// function copyNonDupsTo(resultArray, array) {
//   array.forEach(value => {
//                   if (!resultArray.includes(value)) {
//                     resultArray.push(value);
//                   }
//                 });
// }