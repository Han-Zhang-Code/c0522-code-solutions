var $countdown = document.querySelector('.countdown-display');
function countdownDisplay() {
  var string = $countdown.textContent;
  var int = parseInt(string);
  $countdown.textContent = int - 1;
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
