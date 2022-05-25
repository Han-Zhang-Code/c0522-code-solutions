/* exported ransomCase */
/*
declare an empty stirng variable
use for loop to iterate though stirng
if i is even make string[i] lower case and assign to the new empty string
if i is odd make string[i] upper case and assign to the new empty string
return to the new string variable
*/
function ransomCase(string) {
  var newWord = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newWord += string[i].toLowerCase();
    } else {
      newWord += string[i].toUpperCase();
    }
  }

  return newWord;
}
