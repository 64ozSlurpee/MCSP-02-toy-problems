/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

 //write function to check if string is a palindrome
function isPalindrome(string) {
    //split string, reverse array then join again
    let reversedStr = string.split("").reverse().join("");
    //return true if the given string is the same as the reversed string
    return string === reversedStr;
  }
    
  function longestPalindrome(string){
    //declare max palindrome length and results variables
    let maxLength = 0;
    let results = "";
    //iterate throught the given string
    for(var i = 0; i < string.length; i++) {
      //declare a substring variable
      var sub = string.substring(i, string.length); 
      //iterate through substring
      for(var j = sub.length; j >= 0; j--) {
        //declare another substring variable of the substring
        var subStr = sub.substring(0, j);
        //set conditional checking if substrings length is less than or equal to one
        if (subStr.length <= 1){
              continue;
        }
        //set conditional invoking isPalindrome function
        if (isPalindrome(subStr)) {
          //set conditional to check lengths
          if (subStr.length > maxLength) {
            //reassign variables
            maxLength = subStr.length;
            results = subStr;
          }
        }
      }
    }
    //return results
    return results;
  }