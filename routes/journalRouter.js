const express = require('express');
const router = express.Router();
const connection = require('../config');
const jwtMiddleware = require('../services/jwtMiddleware');

router.get('/', (req, res) => {
  connection.query('SELECT * FROM journal WHERE publish="1" ORDER BY edition DESC',
    (err, results) => {
      if (err) {
        res.status(400).send('Query Error');
      } else if (results.length === 0) {
        res.status(404).send('Edition not found');
      } else {
        res.status(200).json(results);
      }
    });
});

router.get('/all', (req, res) => {
  connection.query('SELECT * FROM journal ORDER BY edition DESC',
    (err, results) => {
      if (err) {
        res.status(400).send('Query Error');
      } else if (results.length === 0) {
        res.status(404).send('Edition not found');
      } else {
        res.status(200).json(results);
      }
    });
});

router.get('/:edition', (req, res) => {
  connection.query('SELECT * FROM journal WHERE edition=?',
    [req.params.edition], (err, results) => {
      if (err) {
        res.status(400).send('Query Error');
      } else if (results.length === 0) {
        res.status(404).send('Edition not found');
      } else {
        res.status(200).json(results);
      }
    });
});

router.get('/:edition', (req, res) => {
  connection.query('SELECT * FROM journal WHERE edition=?',
    [req.params.edition], (err, results) => {
      if (err) {
        res.status(400).send('Query Error')
      } else {
        if (results.length === 0) {
          res.status(404).send('Edition not found')
        } else {
          res.status(200).json(results)
        }
      }
    }
  )
})

router.post('/publish', jwtMiddleware, (req, res) => {
  const { id, ...formData } = req.body;
  connection.query('INSERT INTO journal SET ?', [formData], (err, results) => {
    if (err) {
      res.status(400).json({ flash: 'Something went wrong' });
    } else {
      res.status(200).json({ flash: 'Gravado com Sucesso' });
    }
  });
});

router.put('/editPublication', jwtMiddleware, (req, res) => {
  connection.query('UPDATE journal SET ? WHERE id=?', [req.body, req.body.id], (err, results) => {
    if (err) {
      res.status(400).send('Newspaper not updated');
    } else {
      if (results.length === 0) {
        res.status(400).json({ flash: 'Edição não existe' });
      } else {
        res.status(200).json({ flash: 'Gravado com Sucesso' });
      }
    }
  }
  )
})

router.put('/editPublication/:edition', jwtMiddleware, (req, res) => {
  connection.query('UPDATE journal SET ? WHERE id=?',
    [req.body, req.params.id],
    (err, results) => {
      if (err) {
        res.status(400).send('Newspaper not updated')
      } else {
        if (results.length === 0) {
          res.status(400).sen('Not existing newspaper edition')
        } else {
          res.status(200).send('Newspaper edition updated')
        }
      }
    }
  )
})

router.delete('/', jwtMiddleware, (req, res) => {
  connection.query('DELETE FROM journal WHERE id=?',
    req.body.id,
    (err, results) => {
      if (err) {
        res.status(400).send('Error deleting newspaper edition');
      } else if (results.length === 0) {
        res.status(400).semd('Not existing newspaper edition');
      } else {
        res.status(200).send('Newspaper edition deleted');
      }
    });
});

router.delete('/:edition', jwtMiddleware, (req, res) => {
  connection.query('DELETE FROM journal WHERE id=?',
    req.params.id,
    (err, results) => {
      if (err) {
        res.status(400).send('Error deleting newspaper edition')
      } else {
        if (results.length === 0) {
          res.status(400).semd('Not existing newspaper edition')
        } else {
          res.status(200).send('Newspaper edition deleted')
        }
      }
    }
  )
});

router.get('/headers/headers', (req, res) => {
  connection.query('SELECT * FROM jornal_Header',
    (err, results) => {
      if (err) {
        res.status(400).send('Query Error');
      } else {
        res.status(200).json(results);
      }
    });
});

router.put('/headers/headers_edit', jwtMiddleware, (req, res) => {
  connection.query('UPDATE jornal_Header SET ? ',
    [req.body],
    (err, results) => {
      if (err) {
        res.status(400).json({ flash: 'Ocorreu um erro' })
      } else {
        res.status(200).json({ flash: 'Alterado com sucesso' })

      }
    }
  )
})




module.exports = router;
