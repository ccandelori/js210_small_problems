const runningTotal = function runningTotal(values) {
  let total = 0;
  let totals = [];

  for (let i = 0; i < values.length; i += 1) {
    total += values[i];
    totals.push(total);
  }
  
  return totals;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // [])