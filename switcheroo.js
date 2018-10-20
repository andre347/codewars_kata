function switcheroo(x) {
  const letters = x.toString().split("");
  const output = (replace = letters.map(letter => {
    if (letter === "a") {
      return letter.replace("a", "b");
    } else if (letter === "b") {
      return letter.replace("b", "a");
    }
    return letter;
  })).join();
  return output.replace(/,/g, "");
}

console.log(switcheroo("abc"), "bac");
console.log(switcheroo("aaabcccbaaa"), "bbbacccabbb");
console.log(switcheroo("ccccc"), "ccccc");
