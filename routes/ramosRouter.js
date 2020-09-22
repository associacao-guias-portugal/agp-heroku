const express = require('express');

const router = express.Router();
const connection = require('../config');

const jwtMiddleware = require('../services/jwtMiddleware');

router.get('/', (req, res) => {
  connection.query('SELECT type FROM ramos', (err, results) => {
    if (err) {
      res.status(500).send('Data not found');
    } else {
      res.status(200).json(results);
    }
  });
});

router.get('/:type', (req, res) => {
  const ramoType = req.params.type.replace('-', ' ');
  connection.query('SELECT * FROM ramos WHERE type = ?', [ramoType], (err, results) => {
    if (err) {
      res.status(500).send('Data not found');
    } else {
      res.status(200).json(results);
    }
  });
});

router.put('/:type', jwtMiddleware, (req, res) => {
  const ramoType = req.params.type.replace('-', ' ');
  const newData = req.body;
  connection.query('UPDATE ramos SET ? WHERE type = ?', [newData, ramoType], (err, results) => {
    if (err) {
      res.status(500).json({ flash: err.message });
    } else {
      res.status(200).json({ flash: 'Gravado com Sucesso' });
    }
  });
});

module.exports = router;
