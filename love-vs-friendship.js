function wordsToMarks(string) {
  //your code here
  // create alphabet
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  // split the word into elemtns of array
  const splitWord = string.split("");
  // place to create a counter
  let count = 0;
  // lopp over the split word and find the index in the alphabet, add a 1
  for (let i = 0; i < splitWord.length; i++) {
    count += alphabet.indexOf(splitWord[i]) + 1;
  }
  return count;
}

console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);
console.log(wordsToMarks("selfness"), 99);
console.log(wordsToMarks("knowledge"), 96);
