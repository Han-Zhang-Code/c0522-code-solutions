/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstStringletters = firstString.replaceAll(' ', '').split('').sort().join('');
  var secondStringletters = secondString.replaceAll(' ', '').split('').sort().join('');
  if (firstStringletters === secondStringletters) {
    return true;
  } else {
    return false;
  }

}
