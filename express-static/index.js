const express = require('express');
const app = express();
const path = require('path');

const pathToPublic = path.join(__dirname, 'public');
console.log(pathToPublic);
const expressStatic = express.static('public');
app.use(expressStatic);
app.listen(3000);
