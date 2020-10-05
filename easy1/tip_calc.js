// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will put in numbers.

function calculateTipBecauseImStupid() {
  var rlSync = require('readline-sync');
  let billAmt = rlSync.question("What was the bill amount?: ");
  let tipPct = rlSync.question("What percentage would you like to tip?: ");
  let billTotal = billAmt * (1 + (tipPct/100));

  console.log(`Tip: $${billAmt * (tipPct/100)}\nTotal Bill: $${billTotal}`);
}

calculateTipBecauseImStupid();