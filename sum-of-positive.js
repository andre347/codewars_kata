function positiveSum(arr) {
  // create a new array
  const newArr = [];
  // loop over array to remove the numbers below zero
  arr.forEach(n => (n > 0 ? newArr.push(n) : 0));
  // reduce the array
  return newArr.reduce((a, b) => a + b, 0);
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);
