var express = require('express');
var app = express();
app.use(function (req, res) {
  res.send('<h3>Hello World</h3>');
});
app.listen(3000);
