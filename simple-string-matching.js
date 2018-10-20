// You will be given two strings a and b consisting of lower case letters, but a will have at most one asterix character.The asterix(if any) can be replaced with an arbitrary sequence(possibly empty) of lowercase letters.No other character of string a can be replaced.If it is possible to replace the asterix in a to obtain string b, then string b matches the pattern.

function solve(a, b) {
  a = a.replace("*", "\\S*");
  var re = new RegExp(a);
  return b.match(re) == b ? true : false;
}

console.log(solve("code*s", "codewars"), true);
console.log(solve("codewar*s", "codewars"), true);
console.log(solve("code*warrior", "codewars"), false);
console.log(solve("c", "c"), true);
console.log(solve("*s", "codewars"), true);
console.log(solve("*s", "s"), true);
console.log(solve("s*", "s"), true);
console.log(solve("aa", "aaa"), false);
console.log(solve("aa*", "aaa"), true);
console.log(solve("aaa", "aa"), false);
console.log(solve("aaa*", "aa"), false);
console.log(solve("*", "codewars"), true);
