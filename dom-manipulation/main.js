var numberClicked = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function numberClickedfunction() {
  numberClicked++;
  $clickCount.textContent = 'Clicks: ' + numberClicked;
  if (numberClicked < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numberClicked < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numberClicked < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numberClicked < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numberClicked < 16) {
    $hotButton.className = 'hot-button hot';
  } else if (numberClicked >= 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}
$hotButton.addEventListener('click', numberClickedfunction);
