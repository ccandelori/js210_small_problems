// Write a function that takes an array of integers between 0 and 19, and returns an array of those integers sorted based on the English word for each number:

// const alphaSort = function alphaSort(numbers) {
//   const ALPHAWORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
//                       'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
//                       'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
//                       'eighteen', 'nineteen'];
//   let sorted = [...numbers];

//   for (let i = 0; i < sorted.length; i += 1) {
//     sorted[i] = ALPHAWORDS[i];
//   }

//   sorted = sorted.sort();

//   for (let i = 0; i < sorted.length; i += 1) {
//     sorted[i] = ALPHAWORDS.indexOf(sorted[i]);
//   }

//   return sorted;
// }

const alphaSort = function alphaSort(numbers) {
  const ALPHAWORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
                      'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
                      'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
                      'eighteen', 'nineteen'];
                      
  return numbers.sort((score1, score2) => {
    if (ALPHAWORDS[score1] < ALPHAWORDS[score2]) {
      return -1
    } else if (ALPHAWORDS[score2] > ALPHAWORDS[score1]) {
      return 1
    } else {
      return 0;
    }
  });
}

console.log(alphaSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));