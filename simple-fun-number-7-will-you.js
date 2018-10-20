function willYou(young, beautiful, loved) {
  if (young == true && beautiful == true && loved == false) {
    return false;
  } else if (young == true && beautiful == false && loved == false) {
    return false;
  } else if (young == true && beautiful == true && loved == true) {
    return false;
  } else if (young == false && beautiful == false && loved == false) {
    return false;
  } else if (young == false && beautiful == false && loved == true) {
    return true;
  } else if (young == true && beautiful == true && loved == false) {
    return true;
  } else return false;
}

// they are young and beautiful but not loved;
// they are loved but not young or not beautiful.

console.log(willYou(true, true, true), false);
console.log(willYou(true, false, true), true);
console.log(willYou(false, false, false), false);
console.log(willYou(false, false, true), true);
console.log(willYou(true, true, false), true);
