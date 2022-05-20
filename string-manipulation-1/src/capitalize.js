/* exported capitalize */
/*
declar a new empty string variable
make the first index of the word to uppercase + slice the rest of the word lowercase
return to the new string variable
*/
function capitalize(word) {
  var newWord = '';
  newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return newWord;
}
