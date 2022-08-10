/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  var newList = new LinkedList(value);
  newList.next = new LinkedList(list.data);
  newList.next.next = list.next;
  return newList;
}
