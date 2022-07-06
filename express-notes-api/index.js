const express = require('express');
const app = express();
const notes = require('./data.json');
const fs = require('fs');
app.listen(3000);
app.get('/api/notes', (req, res) => {
  const temp = [];
  for (var k in notes.notes) {
    temp.push(notes.notes[k]);
  }
  res.status(200);
  res.json(temp);
});
app.get('/api/notes/:id', (req, res) => {
  var id = Number(req.params.id);
  if (id < 0 || Number.isNaN(id)) {
    var errorMessage = { error: 'id must be a positive integer' };
    res.status(400).send(errorMessage);
  } else if (notes.notes[id] !== undefined) {
    res.status(200).json(notes.notes[id]);
  } else {
    var notFoundMessage = { error: 'cannot find note with id ' + id };
    res.status(404).send(notFoundMessage);
  }
});
app.use(express.json());
app.post('/api/notes', (req, res) => {
  const newNotes = req.body;
  if (newNotes.content !== undefined) {
    newNotes.id = notes.nextId;
    notes.nextId++;
    notes.notes[newNotes.id] = newNotes;
    var JSONNotes = JSON.stringify(notes, null, 2);
    fs.writeFile('data.json', JSONNotes, err => {
      console.error(err);
      res.status(500).end();
    });
    res.status(201);
    res.json(newNotes);
  } else {
    var notFoundMessage = { error: 'content is a required field' };
    res.status(400).send(notFoundMessage);
  }
});
app.delete('/api/notes/:id', (req, res) => {
  var id = Number(req.params.id);
  if (id < 0 || Number.isNaN(id)) {
    var errorMessage = { error: 'id must be a positive integer' };
    res.status(400).send(errorMessage);
  } else if (notes.notes[id] === undefined) {
    var notFoundMessage = { error: 'cannot find note with id ' + id };
    res.status(404).send(notFoundMessage);
  } else {
    delete notes.notes[id];
    res.status(204).end();
    var JSONNotes = JSON.stringify(notes, null, 2);
    fs.writeFile('data.json', JSONNotes, err => {
      console.error(err);
      res.status(500).end();
    });
  }
});
app.put('/api/notes/:id', (req, res) => {
  var id = Number(req.params.id);
  const newNotes = req.body;
  if (id < 0 || Number.isNaN(id)) {
    var errorMessage = { error: 'id must be a positive integer' };
    res.status(400).send(errorMessage);
  } else if (newNotes.content === undefined) {
    var notFoundMessage = { error: 'content is a required field' };
    res.status(400).send(notFoundMessage);
  } else if (notes.notes[id] === undefined) {
    var noFoundMessage = { error: 'cannot find note with id ' + id };
    res.status(404).send(noFoundMessage);
  } else {
    newNotes.id = id;
    notes.notes[newNotes.id] = newNotes;
    var JSONNotes = JSON.stringify(notes, null, 2);
    fs.writeFile('data.json', JSONNotes, err => {
      console.error(err);
      res.status(500).end();
    });
    res.status(200);
    res.json(newNotes);
  }
});
