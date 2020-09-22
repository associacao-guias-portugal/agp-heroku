const express = require('express');

const router = express.Router();
const connection = require('../config');

const jwtMiddleware = require('../services/jwtMiddleware');

router.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM news ORDER BY date DESC;',
    (err, results) => {
      if (err) {
        res.status(500).send('News not found');
      } else {
        res.json(results);
      }
    },
  );
});

router.get('/published', (req, res) => {
  connection.query(
    'SELECT * FROM news WHERE publish = 1 ORDER BY date DESC;',
    (err, results) => {
      if (err) {
        res.status(500).send('News not found');
      } else {
        res.json(results);
      }
    },
  );
});

router.get('/:id', (req, res) => {
  connection.query('SELECT * FROM news WHERE id=?',
    [req.params.id], (err, results) => {
      if (err) {
        res.status(400).send('Query Error');
      } else if (results.length === 0) {
        res.status(404).send('Edition not found');
      } else {
        res.status(200).json(results);
      }
    });
});

router.post('/', jwtMiddleware, (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO news SET ?', formData, (err, results) => {
    if (err) {
      res.status(500).json({ flash: err.message });
      console.log(err);
    } else {
      res.status(200).json({ flash: 'Gravado com Sucesso' });
    }
  });
});

router.put('/:id', jwtMiddleware, (req, res) => {
  // We get the ID from the url:
  const idNews = req.params.id;

  // We get the data from the req.body
  const newNews = req.body;

  // We send a UPDATE query to the DB
  connection.query(
    'UPDATE news SET ? WHERE id = ?',
    [newNews, idNews],
    (err, results) => {
      if (err) {
        res.status(500).json({ flash: err.message });
      } else {
        res.status(200).json({ flash: 'Gravado com Sucesso' });
      }
    },
  );
});

router.delete('/:id', jwtMiddleware, (req, res) => {
  const idNews = req.params.id;
  console.log(idNews);
  connection.query(
    'DELETE FROM news WHERE id = ?', idNews,
    (err, results) => {
      if (err) {
        res.status(500).send('Error');
      } else {
        res.status(200).send('News deleted!');
      }
    },
  );
});

module.exports = router;
