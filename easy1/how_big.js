// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

function howBig() {
  var rlSync = require('readline-sync');
  const SQM_TO_SQFT
  let length = rlSync.question("Enter the room's length in meters: ");
  let width = rlSync.question("Enter the room's width in meters: ");

  console.log(`The room's total area is ${Number(length * width)} square meters,
               or ${Number(length * width) * SQM_TO_SQFT} square feet.`);
}

howBig();