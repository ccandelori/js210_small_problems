const multiplyLists = function multiplyLists(left, right) {
  const product = [...left];
  
  for (let i = 0; i < product.length; i += 1) {
    product[i] *= right[i];
  }

  return product;
}

console.log(multiplyLists([3, 5, 7], [9, 10, 11]));