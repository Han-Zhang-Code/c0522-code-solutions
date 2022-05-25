/* exported swapChars */
/*
use split method to split string into array
declard a temp variable and assign to firstindex value
assign secondindex value to firstindex value
assign temp value to the secondindex value
use join method to convert array into string and return the value
*/
function swapChars(firstIndex, secondIndex, string) {

  var newString = string.split('');
  var temp = newString[firstIndex];
  newString[firstIndex] = newString[secondIndex];
  newString[secondIndex] = temp;
  return newString.join('');
}
