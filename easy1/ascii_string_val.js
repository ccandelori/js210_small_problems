function asciiValue(str) {
  let value = 0;

  for (let i = 0; i < str.length; i++) {
    value += str.charCodeAt(i);
  }

  return value;
}