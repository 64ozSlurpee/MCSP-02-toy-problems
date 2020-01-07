/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  // TODO: Implement me!
  // split the string at each character
  let temp = romanNumeral.split("");
  // create result variable
  let result = 0;
  // iterate through array
  for (let i = 0; i < temp.length; i++) {
    //save current letter
    let currentLetter = DIGIT_VALUES[temp[i]];
    // save next letter
    let nextLetter = DIGIT_VALUES[temp[i + 1]];
    // if the current letter is undefined return null
    if (currentLetter === undefined) {
      return null;
    } else {
      /// else if current letter is less than the next letter subtract
      if (currentLetter < nextLetter) {
        result += nextLetter - currentLetter;
        i++;
      } else {
        // else add to result
        result += currentLetter;
      }
    }
  }
  return result;
};

