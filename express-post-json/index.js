const express = require('express');
const app = express();
var nextId = 1;
var grades = [];
app.listen(3000);
app.use(express.json());
app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const k in grades) {
    gradesArray.push(grades[k]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  // console.log(req.body);
  const newGrade = req.body;
  const id = nextId++;
  newGrade.id = id;
  grades[id] = newGrade;
  res.status(201);
  res.json(newGrade);
});
