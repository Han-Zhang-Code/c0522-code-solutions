let count = 3;
let intervalID = null;
intervalID = setInterval(countDown, 1000);
function countDown() {
  console.log(count);
  count--;
  if (count === 0) {
    setTimeout(() => {
      console.log('Blast off!');
    }, 1000);
    clearInterval(intervalID);
  }
}
