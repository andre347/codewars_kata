function XO(str) {
  let x = (str.match(/x/gi) || []).length;
  let o = (str.match(/o/gi) || []).length;
  if (x === o) {
    return true;
  }
  return false;
}

console.log(XO("xo"), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);
