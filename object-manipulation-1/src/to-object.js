/* exported toObject */
/*
declare new empty object
assign first index value of keyValuePair to keys and second index value of keyValuePair to value for the new empty object
return  the empty object
*/
function toObject(keyValuePair) {
  var obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
