function flattenAndSort(array) {
  // Good luck, brave code warrior!
  // create new array to store values
  let newArr = [];
  // first loop over each array
  array.forEach(item => {
    item.map(i => {
      newArr.push(i);
    });
  });
  // sort numerical data in ascending order
  return newArr.sort((a, b) => a - b);
}

console.log(flattenAndSort([]), []);
console.log(flattenAndSort([[], [1]]), [1]);
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
