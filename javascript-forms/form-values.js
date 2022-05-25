var $submitForm = document.querySelector('#contact-form');
function handleSubmit(event) {
  event.preventDefault();
  var formObject = {};
  formObject[$submitForm.elements.name.name] = $submitForm.elements.name.value;
  formObject[$submitForm.elements.email.name] = $submitForm.elements.email.value;
  formObject[$submitForm.elements.message.name] = $submitForm.elements.message.value;
  console.log('message data:', formObject);
  $submitForm.reset();
}
$submitForm.addEventListener('submit', handleSubmit);
