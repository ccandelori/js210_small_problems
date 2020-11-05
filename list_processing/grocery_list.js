const buyFruit = function buyFruit(list) {
  const fruits = [];

  for (let i = 0; i < list.length; i += 1) {
    for (let j = 0; j < list[i][1]; j += 1) {
      fruits.push(list[i][0]);
    }
  }

  return fruits;
}

function buyFruit(fruitsList) {
  return fruitsList.map(fruit => repeat(fruit))
                   .reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruit) {
  const result = [];

  for (let i = 0; i < fruit[1]; i += 1) {
    result.push(fruit[0]);
  }

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));