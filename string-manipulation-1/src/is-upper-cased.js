/* exported isUpperCased */
/*
for loop to loop through the word
check each index for the word array,
compare each letter to word.tolowercase(), to determing if its lowercase letter
if lowercase letter found return false,
else return true

*/
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
