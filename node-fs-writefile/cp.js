const fs = require('fs');
let content = '';
fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  content = data;
  const datas = new Uint8Array(Buffer.from(content));
  fs.writeFile(process.argv[3], datas, err => {
    if (err) throw err;
  });
});
