var $selectMessage = document.querySelector('.message');
function timeDelay() {
  $selectMessage.textContent = 'Hello There';
}
setTimeout(timeDelay, 2 * 1000);
