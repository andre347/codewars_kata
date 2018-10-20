function oddCount(n) {
  let newN = n - 2;
  if (newN <= 0) {
    return oddCount(newN);
  }
}

// Basic Tests

console.log(oddCount(15), 7, "Oops! Wrong.");
console.log(oddCount(15023), 7511, "Oops! Wrong.");
