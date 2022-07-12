const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];
const initialValueSum = 0;
const sum = numbers.reduce((previous, current) => previous + current, initialValueSum);
console.log('sum:', sum);

const initialValueProduct = 1;
const product = numbers.reduce((previous, current) => previous * current, initialValueProduct);
console.log('product:', product);

const initialValueBalance = 0;
const balance = account.reduce((previous, current) => {
  if (current.type === 'deposit') {
    return current.amount + previous;
  }
  if (current.type === 'withdrawal') {
    return previous - current.amount;
  }
  return previous;
}, initialValueBalance);
console.log('balance:', balance);

const initialValueComposite = {};
const composite = traits.reduce((previous, current) => {
  return Object.assign(current, previous);
}, initialValueComposite);
console.log('Composite:', composite);
