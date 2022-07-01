const notes = require('./data.json');
const fs = require('fs');
if (process.argv[2] === 'read') {
  for (const k in notes.notes) {
    console.log(k + ':' + notes.notes[k]);
  }
} else if (process.argv[2] === 'create') {
  notes.notes[notes.nextId] = process.argv[3];
  notes.nextId++;
  var newNotes = JSON.stringify(notes, null, 2);
  fs.writeFile('data.json', newNotes, err => {
    if (err) throw err;
  });
} else if (process.argv[2] === 'delete') {
  delete notes.notes[process.argv[3]];
  newNotes = JSON.stringify(notes, null, 2);
  fs.writeFile('data.json', newNotes, err => {
    if (err) throw err;
  });
} else if (process.argv[2] === 'update') {
  notes.notes[process.argv[3]] = process.argv[4];
  newNotes = JSON.stringify(notes, null, 2);
  fs.writeFile('data.json', newNotes, err => {
    if (err) throw err;
  });
}
