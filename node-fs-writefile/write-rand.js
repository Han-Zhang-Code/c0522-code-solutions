const fs = require('fs');
const data = new Uint8Array(Buffer.from(Math.random().toString() + '\n'));
fs.writeFile('random.txt', data, err => {
  if (err) throw err;
});
