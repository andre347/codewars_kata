function nbYear(p0, percent, aug, p) {
  // your code
  // p0 is the start value
  // percent of the increase per year
  // aug is a fixed number that increases each year
  // p is the last year

  // create a start value
  let index = 0;
  const percentValue = percent / 100;

  for (index; p0 < p; index++) {
    p0 += p0 * percentValue;
    p0 += aug;
  }
  return index;
}

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
