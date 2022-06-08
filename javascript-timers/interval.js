var $countdown = document.querySelector('.countdown-display');
function countdownDisplay() {
  if ($countdown.textContent === '4') {
    $countdown.textContent = '3';
  } else if ($countdown.textContent === '3') {
    $countdown.textContent = '2';
  } else if ($countdown.textContent === '2') {
    $countdown.textContent = '1';
  } else if ($countdown.textContent === '1') {
    $countdown.textContent = '~Earth BeeeelooowwwUs~';
  } else if ($countdown.textContent === '~Earth BeeeelooowwwUs~') {
    clearInterval(timerId);
  }
}

var timerId;

if (!timerId) {
  timerId = setInterval(countdownDisplay, 1000);
}
