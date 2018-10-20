catMouse = x => (x.match(/\./g).length <= 3 ? "Caught!" : "Escaped!");

console.log(catMouse("C....m"), "Escaped!");
console.log(catMouse("C..m"), "Caught!");
console.log(catMouse("C.....m"), "Escaped!");
