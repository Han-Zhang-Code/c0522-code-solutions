const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
if (process.argv[3] === 'plus') {
  const result = add(parseInt(process.argv[2]), parseInt(process.argv[4]));
  console.log('result:', result);
} else if (process.argv[3] === 'minus') {
  const result = subtract(process.argv[2], process.argv[4]);
  console.log('result:', result);
} else if (process.argv[3] === 'over') {
  const result = divide(process.argv[2], process.argv[4]);
  console.log('result:', result);
} else if (process.argv[3] === 'times') {
  const result = multiply(process.argv[2], process.argv[4]);
  console.log('result:', result);
} else if (process.argv[3] !== 'times' || process.argv[3] !== 'over' || process.argv[3] !== 'plus' || process.argv[3] !== 'minus') {
  console.log('invalid operation');
}
