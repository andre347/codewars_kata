function repeater(string, n) {
  //Your code goes here.
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(string);
  }
  return newArr.join("");
}

console.log(repeater("a", 5), "aaaaa");
console.log(repeater("Na", 16), "NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa");
console.log(repeater("Wub ", 6), "Wub Wub Wub Wub Wub Wub ");
