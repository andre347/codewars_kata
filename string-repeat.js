function repeatStr(n, s) {
  // do a join of s on s how many n times
  let newS = "";
  for (let i = 0; i < n; i++) {
    newS += s;
  }
  return newS;
}

console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");
