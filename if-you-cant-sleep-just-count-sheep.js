// TASK
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

const countSheep = num => {
  //your code here
  let arr = [];
  if (num >= 0) {
    for (let index = 0; index < num; index++) {
      const text = `${index + 1} sheep...`;
      arr.push(text);
    }
    return arr.join("");
  }
};

console.log(countSheep(2), "1 sheep...2 sheep...");
console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");
console.log(countSheep(1), "1 sheep...");
