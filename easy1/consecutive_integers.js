function consecutive() {
  var rlSync = require('readline-sync');
  let upperBound = rlSync.question('Enter an integer greater than 0: ');
  let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');

  let result = 0;
  if (operation === 's') {
    for (let i = 1; i <= upperBound; i++) {
      result += i;
    }
    operation = 'sum';
  } else if (operation === 'p') {
    result = 1;
    for (let i = 1; i <= upperBound; i++) {
      result *= i;
    }
    operation = 'product'
  }

  console.log(`The ${operation} of the integers between 1 and ${upperBound} is ${result}`);
}

consecutive();