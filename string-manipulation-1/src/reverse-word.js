/* exported reverseWord */
/*
declare a new empty string
using for loop to iterate the word backwards
assign each letter to the new string
return new string

 */
function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
