// function isPalindrome(x) {
//   return x.toLowerCase().split('').reverse().join('') === x.toLowerCase()
// }

const isPalindrome = x =>
  x
    .toLowerCase()
    .split("")
    .reverse()
    .join("") === x.toLowerCase();

console.log(isPalindrome("a"), true);
console.log(isPalindrome("aba"), true);
console.log(isPalindrome("Abba"), true);
console.log(isPalindrome("hello"), false);
console.log(isPalindrome("Bob"), true);
console.log(isPalindrome("Madam"), true);
console.log(isPalindrome("AbBa"), true);
console.log(isPalindrome(""), true);
