/* exported takeSmaller */

function takeSmaller(queue) {

  var a = queue.dequeue();
  if (queue.peek() === undefined) return a;
  var b = queue.dequeue();
  if (a >= b) {
    queue.enqueue(a);
    return b;
  }
  if (a < b) {
    queue.enqueue(b);
    return a;
  }

}
