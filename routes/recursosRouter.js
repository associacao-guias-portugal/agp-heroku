const express = require('express');

const router = express.Router();
const connection = require('../config');

const jwtMiddleware = require('../services/jwtMiddleware');


router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM recursos', (err, results) => {
    if (err) {
      res.status(500).json({
        error: err.message,
        sql: err.sql,
      });
    } else {
      res.json(results);
    }
  });
});

router.post('/new', jwtMiddleware, (req, res) => {
  const newData = req.body;
  connection.query('INSERT INTO recursos SET ?', [newData], (err, results) => {
    if (err) {
      res.status(500).send('Error updating recursos data');
    } else {
      res.sendStatus(200);
    }
  });
});

router.put('/:id', jwtMiddleware, (req, res) => {
  const newData = req.body;
  const labelId = req.params.id;
  connection.query('UPDATE recursos SET ? WHERE id=?', [newData, labelId], (err, results) => {
    if (err) {
      res.status(500).send('Error updating recursos data');
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/:id', jwtMiddleware, (req, res) => {
  const labelId = req.params.id;
  connection.query('DELETE FROM recursos WHERE id=?', [labelId], (err, results) => {
    if (err) {
      res.status(500).send('Error updating recursos data');
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;