const rotateArray = function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length < 1) {
    return [];
  }

  return arr.slice(1, arr.length).concat(arr[0]);
}

const rotateRightmost = function rotateRightmost(digits, num) {
  let digitArray = String(digits).split('');
  let digitSub = digitArray.slice(digitArray.length - num);

  return Number(digitArray.slice(0, digitArray.length - num).concat(rotateArray(digitSub)).join(''));
}

console.log(rotateRightmost(735291, 1)); // 735291
console.log(rotateRightmost(735291, 2)); // 735219
console.log(rotateRightmost(735291, 3)); // 735912
console.log(rotateRightmost(735291, 4)); // 732915
console.log(rotateRightmost(735291, 5)); // 752913
console.log(rotateRightmost(735291, 6)); // 352917