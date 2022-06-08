var $countdown = document.querySelector('.countdown-display');
var count = 4;
function countdownDisplay() {
  $countdown.innerHTML = count--;
  if ($countdown.textContent === '0') {
    $countdown.textContent = '~Earth BeeeelooowwwUs~';
  }
  if ($countdown.textContent === '~Earth BeeeelooowwwUs~') {
    clearInterval(timerId);
  }
}
var timerId;
if (!timerId) {
  timerId = setInterval(countdownDisplay, 1000);
}
