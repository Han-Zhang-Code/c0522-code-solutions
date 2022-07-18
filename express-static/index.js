const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/image1.jpg', (req, res) => {
  const pathToImg = path.join(pathToPublic, 'image1.jpg');
  fs.readFile(pathToImg, (err, data) => {
    if (err) {
      res.status(404).send('not found');
    } else {
      res.end(data);

    }

  });
});

const pathToPublic = path.join(__dirname, 'public');
console.log(pathToPublic);
const expressStatic = express.static('public');
app.use(expressStatic);
app.listen(3000);
