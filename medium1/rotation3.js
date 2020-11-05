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

const maxRotation = function maxRotation(digits) {
  let digitSplit = String(digits).split('');

  for (let i = digitSplit.length; i > 1; i -= 1) {
    digitSplit = String(rotateRightmost(Number(digitSplit.join('')), i)).split('');
  }

  return Number(digitSplit.join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845