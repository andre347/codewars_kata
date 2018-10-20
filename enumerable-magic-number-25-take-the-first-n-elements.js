// function take(arr, n) {
//   return arr.slice(0,n)
// }

const take = (arr, n) => arr.slice(0, n);

console.log(
  take([0, 1, 2, 3, 5, 8, 13], 3),
  [0, 1, 2],
  "should return the first 3 items"
);
