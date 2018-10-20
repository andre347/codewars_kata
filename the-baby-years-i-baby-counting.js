// function babyCount(x) {
//   // write a regex that matches the letters of baby case insensitive
//   // x.match(regex).length;
//   const arr = x.split("");
//   let count = 0;

//   for (letter of arr) {
//     if (letter.match("b") || letter.match("a") || letter.match("y")) {
//       count += 1;
//     }
//   }
//   return Math.floor(count / 4) == 0
//     ? "Where's the baby?!"
//     : Math.floor(count / 4);
// }

function babyCount(x) {
  const regex = /[b|a|y]/gi;
  const checkBaby = x.match(regex);
  //   if (checkBaby) {
  //     return checkBaby.length;
  //   }

  if (lengthBaby) {
    return Math.floor(lengthBaby) / 4;
  }
}

// Given a string of words(x), you need to calculate how many babies are in it.To count as a baby you must have all of the letters in baby('b', 'a', 'b', 'y').That counts as 1. They do not need to be in order in the string.Upper and lower case letters count.

console.log(babyCount("baby"), 1);
console.log(babyCount("abby"), 1);
console.log(babyCount("baby baby baby"), 3);
console.log(babyCount("Why the hell are there so many babies?!"), 1);
console.log(babyCount("Anyone remember life before babies?"), 1);
console.log(babyCount("Happy babies boom ba by?"), 2);
console.log(babyCount("b a b y"), 1);
console.log(babyCount(""), "Where's the baby?!");
console.log(babyCount("none here"), "Where's the baby?!");
