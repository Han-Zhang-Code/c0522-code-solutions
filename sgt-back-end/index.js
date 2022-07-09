var express = require('express');
var app = express();
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
app.listen(3000);
app.use(express.json());

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
app.get('/api/grades', (req, res, next) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
app.post('/api/grades', (req, res, next) => {
  const sql = `
        insert into "grades"("name","course","score") values ($1,$2,$3) returning *
  `;
  var newGrade = req.body;
  if (newGrade.name === undefined || newGrade.course === undefined || newGrade.score === undefined || newGrade.score < 0 || newGrade.score > 100) {
    res.status(400).json({
      error: 'name, course or score is required and score must between 0 to 100'
    });
    return;
  }
  var gradeArray = [req.body.name, req.body.course, req.body.score];
  db.query(sql, gradeArray)
    .then(result => {
      res.status(200).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  var newGrade = req.body;
  if (newGrade.name === undefined || newGrade.course === undefined || newGrade.score === undefined || newGrade.score < 0 || newGrade.score > 100) {
    res.status(400).json({
      error: 'name, course or score is required and score must between 0 to 100'
    });
    return;
  }
  const sql = `
        update "grades" set "name"=$1, "course"=$2, "score"=$3 where "gradeId"=$4 returning *
  `;
  const gradeArray = [req.body.name, req.body.course, req.body.score, Number(req.params.gradeId)];
  db.query(sql, gradeArray)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
        delete from "grades" where "gradeId"=$1 returning *
  `;
  const grade = [gradeId];
  db.query(sql, grade)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.status(204).end();
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
