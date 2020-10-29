// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

const countOccurrences = function countOccurrences(array_in) {
  let count = {};

  for (let i = 0; i < vehicles.length; i += 1) {
    if (count[vehicles[i]]) {
      count[vehicles[i]] += 1;
    } else {
      count[vehicles[i]] = 1;
    }
  }

  for (let item in count) {
    console.log(`${item} => ${String(count[item])}`);
  }
}

countOccurrences(vehicles);