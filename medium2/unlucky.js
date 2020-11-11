const unlucky = function unlucky(year) {
  const thirteenths = [];

  for (let i = 0; i < 12; i += 1) {
    thirteenths.push(new Date(year, i, 13));
  }

  return thirteenths.reduce((count, day) => day.getDay() === 5 ? (count + 1) : count, 0);
}

console.log(unlucky(1986));
console.log(unlucky(2015));
console.log(unlucky(2020));
