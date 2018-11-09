// Given an integer, take the(mean) average of each pair of consecutive digits.Repeat this process until you have a single integer, then return that integer.e.g.

function digitsAverage(input) {
  // your code here

  const array = input.toString().split("");
  let total = 0;

  //let sum = array.reduce(function (a, b) { return a + b; });
  for (let i = 0; i < array.length; i++) {
    total += +array[i];
  }
  return total / array.length;
}

console.log(digitsAverage(246), 4);
console.log(digitsAverage(89), 9);
console.log(digitsAverage(2), 2);

console.log(digitsAverage(245), 4);
console.log(digitsAverage(345), 5);
console.log(digitsAverage(346), 5);
