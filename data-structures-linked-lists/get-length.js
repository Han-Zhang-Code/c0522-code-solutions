/* exported getLength */

function getLength(list) {
  var res = 0;

  while (list) {
    res++;
    list = list.next;
  }
  return res;

}
