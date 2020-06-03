function one(arr, fun) {
  let result = arr.map(fun).filter((item) => item === true).length == 1;
  return result;
}

console.log(
  one([1, 2, 3, 4, 5], function (item) {
    return item < 2;
  }),
  true
);
console.log(
  one([1, 2, 3, 4, 5], function (item) {
    return item % 2;
  }),
  false,
  "more than 1 item are odd"
);
console.log(
  one([1, 2, 3, 4, 5], function (item) {
    return item > 5;
  }),
  false,
  "none item is greater than 5"
);
console.log(
  one([4, 5, 1, 8, 9, 3, 6, 4], function (item) {
    return item === 4;
  }),
  false,
  "2 items equals 5"
);
