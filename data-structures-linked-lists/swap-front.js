/* exported swapFront */
/* global LinkedList */ // eslint-disable-line no-unused-vars
function swapFront(list) {
  if (list.next === null) return list;
  var newlist = new LinkedList(list.next.data);
  newlist.next = new LinkedList(list.data);
  newlist.next.next = list.next.next;
  return newlist;
}
