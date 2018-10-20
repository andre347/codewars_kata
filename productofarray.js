/**
 * Returns product of all numbers in a numeric array.
 * Returns null if param is null or array is empty.
 * @param {Array} values - The array containing the items.
 */
function product(values) {
  //return values[~~(Math.random() * values.length)];
  // grab the array
  //loop over it
  if (values !== null) {
    const product = values.reduce((a, b) => a * b);
    return product;
  }
  return null;
}

console.log(product([5, 4, 1, 3, 9]), 540);
console.log(product([-2, 6, 7, 8]), -672);
console.log(product([10]), 10);
console.log(product([0, 2, 9, 7]), 0);
console.log(product(null), null);
console.log(product([]), null);
