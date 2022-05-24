var $openButton = document.querySelector('.blue-button');
var $closeButton = document.querySelector('.close-button');
var $opensaseme = document.querySelector('.modal');
function opensaseme() {
  $opensaseme.className = 'modal';
}
function closesaseme() {
  $opensaseme.className = 'modal-hide';
}
$openButton.addEventListener('click', opensaseme);
$closeButton.addEventListener('click', closesaseme);
