/* exported isPalindromic */
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
