const fs = require('fs');
let count = 2;
fs.readFile(process.argv[count], 'utf8', read);

function read(err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
  count++;
  if (process.argv[count] != null) {
    fs.readFile(process.argv[count], 'utf8', read);
  }
}
