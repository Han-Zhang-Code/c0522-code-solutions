/* exported isPalindromic */
/*
declare two empty strings
assign first haf of the string to the first new string
assign second half of the string backwards to the second new string
compare two string if they are same return true, else return false
*/
function isPalindromic(string) {
  var forwardString = '';
  var backwardString = '';
  for (var i = 0; i < string.length / 2 - 1; i++) {
    forwardString += string[i];
  }
  for (var j = string.length - 1; j > string.length / 2; j--) {
    backwardString += string[j];
  }
  if (forwardString === backwardString) {
    return true;
  } else {
    return false;
  }
}
