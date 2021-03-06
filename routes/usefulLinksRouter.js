const express = require('express');

const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../config');
const jwtMiddleware = require('../services/jwtMiddleware');



router.get('/', (req, res) => {
    connection.query('SELECT * FROM ligacoes_uteis ORDER BY pt_text',
        (err, results) => {
            if (err) {
                res.status(400).send('Error')
            } else {
                res.status(200).json(results)
            }

        }
    )
})

router.get('/header/header', (req, res) => {
    connection.query('SELECT * FROM ligacoes_uteis_Header',
        (err, results) => {
            if (err) {
                res.status(400).send('Error')
            } else {
                res.status(200).json(results)
            }

        }
    )
})


router.get('/:id', (req, res) => {
    connection.query('SELECT * FROM ligacoes_uteis WHERE id=?',
        [req.params.id],
        (err, results) => {
            if (err) {
                res.status(400).send('Error')
            } else {
                res.status(200).json(results)
            }

        }
    )
})




router.put('/:id', jwtMiddleware, (req, res) => {
    connection.query('UPDATE ligacoes_uteis SET ? WHERE id= ?',
        [req.body, req.params.id],
        (err, results) => {
            if (err) {
                res.status(400).json({ flash: 'Ocorreu um erro' })
            } else {
                res.status(200).json({ flash: 'Alterado com sucesso' })
            }
        }
    )
})

router.post("/newLink", jwtMiddleware, (req, res) => {
    connection.query("INSERT INTO ligacoes_uteis SET ?",
        [req.body],
        (err, results) => {
            if (err) {
                res.json({ flash: err.message });
            } else {
                res.json({ flash: "Gravado com sucesso" });
            }
        });
});

router.delete('/deleteLink/:id', jwtMiddleware, (req, res) => {
    connection.query('DELETE FROM ligacoes_uteis WHERE id=?',
        [req.params.id],
        (err, results) => {
            if (err) {
                res.status(400).send('Error deleting link')
            } else {
                res.status(200).send('Link deleted')
            }
        }
    )
})


router.put('/header/header_edit', jwtMiddleware, (req, res) => {
    connection.query('UPDATE ligacoes_uteis_Header SET ? ',
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