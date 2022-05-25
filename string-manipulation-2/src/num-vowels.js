/* exported numVowels */
/*
declare variable count and initialize to 0
use for loop to iterate though string,
if string[i] equals to any vowels, increament count
return count
*/
function numVowels(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'A' || string[i] === 'E' || string[i] === 'e' || string[i] === 'i' || string[i] === 'I' || string[i] === 'O' || string[i] === 'o' || string[i] === 'U' || string[i] === 'u') {
      count++;
    }
  }
  return count;
}
