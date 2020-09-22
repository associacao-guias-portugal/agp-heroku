const express = require('express');
const router = express.Router();
const connection = require('../config');
const jwtMiddleware = require('../services/jwtMiddleware');

router.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM contatos;',
    (err, results) => {
      if (err) {
        res.status(500).send('Contatos not found');
      } else {
        res.json(results);
      }
    },
  );
});

router.put('/', jwtMiddleware, (req, res) => {
    const newData = req.body;
    connection.query('UPDATE contatos SET ? ', [newData], (err, results) => {
      if (err) {
        res.status(500).send('Error updating contatos data');
      } else {
        res.sendStatus(200);
      }
    });
  });

module.exports = router;
