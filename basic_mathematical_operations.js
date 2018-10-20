function basicOp(operation, value1, value2) {
  if (operation === "+") return value1 + value2;
  if (operation === "-") return value1 - value2;
  if (operation === "*") return value1 * value2;
  if (operation === "/") return value1 / value2;
}

function basicOp(o, a, b) {
  return eval(a + o + b);
}

console.log("Basic tests\n");
console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
