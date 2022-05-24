/* exported reverseWords */
function reverseWords(string) {
  var newString = string.split('');
  var reversedString = '';
  for (var i = newString.length - 1; i >= 0; i--) {
    reversedString += newString[i];
  }
  var reversedWordsString = reversedString.split(' ');
  var finalArray = [];
  for (var j = reversedWordsString.length - 1; j >= 0; j--) {
    finalArray.push(reversedWordsString[j]);
  }
  return finalArray.join(' ');
}
