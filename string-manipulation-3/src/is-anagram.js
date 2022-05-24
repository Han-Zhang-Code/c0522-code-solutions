/* exported isAnagram */
/*
modify strings, first remove all spaces, then spilt the string into letter array, after that sort the array
,finally use join function to convert the letter array back to string,
compare two modified strings, if they are same return true, else return falses
*/
function isAnagram(firstString, secondString) {
  var firstStringletters = firstString.replaceAll(' ', '').split('').sort().join('');
  var secondStringletters = secondString.replaceAll(' ', '').split('').sort().join('');
  if (firstStringletters === secondStringletters) {
    return true;
  } else {
    return false;
  }

}
