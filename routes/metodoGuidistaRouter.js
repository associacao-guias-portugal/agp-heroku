const express = require('express');

const router = express.Router();
const connection = require('../config');

const jwtMiddleware = require('../services/jwtMiddleware');

router.get('/', (req, res) => {
  connection.query('SELECT * FROM metodo_guidista', (err, results) => {
    if (err) {
      res.status(500).send('Data not found');
    } else {
      res.status(200).json(results);
    }
  });
});

router.put('/', jwtMiddleware, (req, res) => {
  const newData = req.body;
  connection.query('UPDATE metodo_guidista SET ? ', [newData], (err, results) => {
    if (err) {
      res.status(500).send('Data not found');
    } else {
      res.status(200).json(results);
    }
  });
});

// FERRAMENTAS , CONSTANTES, ATIVIDADES E PROJETOS

router.get('/:seccao/all', (req, res) => {
  const seccao = req.params.seccao;

  if (seccao === 'projetos') {
    connection.query('SELECT * FROM metodo_projetos WHERE publish = 1 ORDER BY position', (err, results) => {
      if (err) {
        res.status(500).send('Data not found');
      } else {
        res.status(200).json(results);
      }
    });
  } else if (seccao === 'ferramentas') {
      connection.query('SELECT * FROM metodo_ferramentas', (err, results) => {
        if (err) {
          res.status(500).send('Data not found');
        } else {
          res.status(200).json(results);
        }
      });
  } else if (seccao === 'constantes') {
    connection.query('SELECT * FROM metodo_constantes', (err, results) => {
      if (err) {
        res.status(500).send('Data not found');
      } else {
        res.status(200).json(results);
      }
    });
  } else {
    connection.query('SELECT * FROM metodo_atividades', (err, results) => {
      if (err) {
        res.status(500).send('Data not found');
      } else {
        res.status(200).json(results);
      }
    });
  }
});

router.get('/:seccao', (req, res) => {
  const seccao = req.params.seccao;

  if (seccao === 'projetos') {
    connection.query('SELECT id, position, pt_title, pt_date, publish FROM metodo_projetos ORDER BY position', (err, results) => {
      if (err) {
        res.status(500).send('Data not found');
      } else {
        res.status(200).json(results);
      }
    });
  } else if (seccao === 'ferramentas') {
      connection.query('SELECT id, pt_title FROM metodo_ferramentas', (err, results) => {
        if (err) {
          res.status(500).send('Data not found');
        } else {
          res.status(200).json(results);
        }
      });
    // }
  } else if (seccao === 'constantes') {
    connection.query('SELECT id, pt_title FROM metodo_constantes', (err, results) => {
      if (err) {
        res.status(500).send('Data not found');
      } else {
        res.status(200).json(results);
      }
    });
  } else {
    connection.query('SELECT id, pt_title FROM metodo_atividades', (err, results) => {
      if (err) {
        res.status(500).send('Data not found');
      } else {
        res.status(200).json(results);
      }
    });
  }
});

router.get('/projetos/position', (req, res) => {
  connection.query('SELECT MAX(position) as position FROM metodo_projetos', (err, results) => {
    if (err) {
      res.status(500).send('Data not found');
    } else {
      res.status(200).json(results);
    }
  });
});

router.post('/:seccao', jwtMiddleware, (req, res) => {
  const seccao = req.params.seccao;
  const newData = req.body;

  if (seccao === 'projetos') {
    connection.query('INSERT INTO metodo_projetos SET ?', [newData], (err, results) => {
      if (err) {
        res.status(500).json({ flash: err.message });
      } else {
        res.status(200).json({ flash: 'Gravado com Sucesso' });
      }
    });
  } else if (seccao === 'ferramentas') {
    connection.query('INSERT INTO metodo_ferramentas SET ?', [newData], (err, results) => {
      if (err) {
        res.status(500).json({ flash: err.message });
      } else {
        res.status(200).json({ flash: 'Gravado com Sucesso' });
      }
    });
  } else if (seccao === 'constantes') {
    connection.query('INSERT INTO metodo_constantes SET ?', [newData], (err, results) => {
      if (err) {
        res.status(500).json({ flash: err.message });
      } else {
        res.status(200).json({ flash: 'Gravado com Sucesso' });
      }
    });
  } else {
    connection.query('INSERT INTO metodo_atividades SET ?', [newData], (err, results) => {
      if (err) {
        res.status(500).json({ flash: err.message });
      } else {
        res.status(200).json({ flash: 'Gravado com Sucesso' });
      }
    });
  }
});

router.get('/:seccao/:id', (req, res) => {
  const seccao = req.params.seccao;
  const id = req.params.id;

  if (seccao === 'projetos') {
    connection.query('SELECT * FROM metodo_projetos WHERE id = ?', [id], (err, results) => {
      if (err) {
        res.status(500).send('Data not found');
      } else {
        res.status(200).json(results);
      }
    });
  } else if (seccao === 'ferramentas') {
    connection.query('SELECT * FROM metodo_ferramentas WHERE id = ?', [id], (err, results) => {
      if (err) {
        res.status(500).send('Data not found');
      } else {
        res.status(200).json(results);
      }
    });
  } else if (seccao === 'constantes') {
    connection.query('SELECT * FROM metodo_constantes WHERE id = ?', [id], (err, results) => {
      if (err) {
        res.status(500).send('Data not found');
      } else {
        res.status(200).json(results);
      }
    });
  } else {
    connection.query('SELECT * FROM metodo_atividades WHERE id = ?', [id], (err, results) => {
      if (err) {
        res.status(500).send('Data not found');
      } else {
        res.status(200).json(results);
      }
    });
  }
});

router.put('/:seccao/:id', jwtMiddleware, (req, res) => {
  const seccao = req.params.seccao;
  const id = req.params.id;
  const newData = req.body;

  if (seccao === 'projetos') {
    connection.query('UPDATE metodo_projetos SET ? WHERE id = ?', [newData, id], (err, results) => {
      if (err) {
        res.status(500).json({ flash: err.message });
      } else {
        res.status(200).json({ flash: 'Gravado com Sucesso' });
      }
    });
  } else if (seccao === 'ferramentas') {
    connection.query('UPDATE metodo_ferramentas SET ? WHERE id = ?', [newData, id], (err, results) => {
      if (err) {
        res.status(500).json({ flash: err.message });
      } else {
        res.status(200).json({ flash: 'Gravado com Sucesso' });
      }
    });
  } else if (seccao === 'constantes') {
    connection.query('UPDATE metodo_constantes SET ? WHERE id = ?', [newData, id], (err, results) => {
      if (err) {
        res.status(500).json({ flash: err.message });
      } else {
        res.status(200).json({ flash: 'Gravado com Sucesso' });
      }
    });
  } else {
    connection.query('UPDATE metodo_atividades SET ? WHERE id = ?', [newData, id], (err, results) => {
      if (err) {
        res.status(500).json({ flash: err.message });
      } else {
        res.status(200).json({ flash: 'Gravado com Sucesso' });
      }
    });
  }
});


router.delete('/projetos/:id', jwtMiddleware, (req, res) => {
  connection.query('DELETE FROM metodo_projetos WHERE id=?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).send('Data not found');
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
