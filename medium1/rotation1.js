//Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.
// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

const rotateArray = function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length < 1) {
    return [];
  }

  return arr.slice(1, arr.length).concat(arr[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));
console.log(rotateArray(['a', 'b', 'c']));
console.log(rotateArray(['a']));
console.log(rotateArray([1, 'a', 2, 'b']));
console.log(rotateArray());
console.log(rotateArray([]));