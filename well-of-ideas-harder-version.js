function well(x) {
  let newArr = [];
  let a = [].concat.apply([], x);

  a.forEach(x => {
    if (String(x).match(/\bgood\b/gi)) {
      newArr.push(x);
    }
  });

  if (newArr.length === 2 || newArr.length === 1) {
    return "Publish!";
  } else if (newArr.length >= 3) {
    return "I smell a series!";
  } else return "Fail!";
}

console.log(
  well([["bad", "bAd", "bad"], ["bad", "bAd", "bad"], ["bad", "bAd", "bad"]]),
  "Fail!"
);
console.log(
  well([
    ["gOOd", "bad", "BAD", "bad", "bad"],
    ["bad", "bAd", "bad"],
    ["GOOD", "bad", "bad", "bAd"]
  ]),
  "Publish!"
);
console.log(
  well([
    ["gOOd", "bAd", "BAD", "bad", "bad", "GOOD"],
    ["bad"],
    ["gOOd", "BAD"]
  ]),
  "I smell a series!"
);
console.log(
  well([
    "bAd",
    "bad",
    "BAD",
    "bAd",
    "cheat",
    "bAd",
    "bAd",
    "6",
    "BAD",
    "good",
    "six",
    "16",
    "bAd"
  ]),
  "I smell a series!"
);
