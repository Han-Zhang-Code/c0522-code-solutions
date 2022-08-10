/* exported takeNextSmallest */

function takeNextSmallest(queue) {

  var small = queue.dequeue();
  while (small > queue.peek()) {
    queue.enqueue(small);
    small = queue.dequeue();
  }
  return small;
}
