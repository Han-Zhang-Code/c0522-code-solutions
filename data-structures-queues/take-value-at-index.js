/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  for (var i = 0; i < index; i++) {
    var a = queue.dequeue();
    queue.enqueue(a);
  }
  return queue.dequeue();
}
