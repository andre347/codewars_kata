const testit = s =>
  s.length < 2 ? s.substring(0, s.length) : s.substring(0, s.length / 2);

console.log(testit(""), "", "");
console.log(testit("a"), "a", "");
console.log(testit("b"), "b", "");
//return s.substr(0,1) ?
console.log(testit("aa"), "a", "");
console.log(testit("ab"), "a", "");
console.log(testit("bc"), "b", "");
//return s.substr(0,s.length/2) ?
console.log(testit("aaaa"), "aa", "");
console.log(testit("aaaaaa"), "aaa", "");
