/* exported getLength */

function getLength(list) {
  var res = 1;

  while (list.next !== null) {
    res++;
    list = list.next;
  }
  return res;

}
