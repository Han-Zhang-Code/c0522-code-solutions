var $openButton = document.querySelector('.blue-button');
var $closeButton = document.querySelector('.close-button');
var $openModal = document.querySelector('.modal');
function openModal() {
  $openModal.className = 'modal';
}
function closeModal() {
  $openModal.className = 'modal-hide';
}
$openButton.addEventListener('click', openModal);
$closeButton.addEventListener('click', closeModal);
