function multiplyAndFilter(array, multiplier) {
  // your code
  let newArr = [];
  //loop over the array
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      newArr.push(array[i] * multiplier);
    }
  }
  return newArr;
  // see if the typeOf is a number
  // if so then multiple by the multiplier
  // push it to a new array
}

console.log(multiplyAndFilter([1, 2, 3, 4], 1.5), [1.5, 3, 4.5, 6]);
console.log(multiplyAndFilter([1, 2, 3], 0), [0, 0, 0]);
console.log(multiplyAndFilter([0, 0, 0], 2), [0, 0, 0]);
console.log(
  multiplyAndFilter(
    [1, null, function() {}, 2.5, "string", 10, undefined, {}, []],
    3
  ),
  [3, 7.5, 30]
);

// Your task is to write a function, which takes two arguments and returns an array.First argument is an array of values, scecond is multiplier.Function is named "multiplyAndFilter" and it should filter all non - numeric values and multiply the rest by given multiplier.
