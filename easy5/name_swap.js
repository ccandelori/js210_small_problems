// Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

const swapName = function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

// General solution for those with more than 1 first name
// function swapName(name) {
//   let namesArr = name.split(' ');
//   let lastName = namesArr.pop();
//   return lastName + ', ' + namesArr.join(' ');
// }

console.log(swapName('Joe Roberts'));