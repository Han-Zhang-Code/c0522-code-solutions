const takeAChance = require('./take-a-chance');

var whatsMyName = takeAChance('Hansinberg');
whatsMyName.catch(error => {
  console.error(error.message);
});

whatsMyName.then(value => {
  console.log(value);
});
