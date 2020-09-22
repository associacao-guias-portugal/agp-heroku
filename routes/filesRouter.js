const express = require('express');
const router = express.Router();
const connection = require('../config');
const jwtMiddleware = require('../services/jwtMiddleware');

router.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM files;',
    (err, results) => {
      if (err) {
        res.status(500).send('Files not found');
      } else {
        res.json(results);
      }
    },
  );
});

router.put('/', jwtMiddleware, (req, res) => {
    const newData = req.body;
    connection.query('UPDATE files SET ? ', [newData], (err, results) => {
      if (err) {
        res.status(500).send('Error updating files data');
      } else {
        res.sendStatus(200);
      }
    });
  });

module.exports = router;