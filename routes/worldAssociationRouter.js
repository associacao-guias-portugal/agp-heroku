const express = require('express');

const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../config');
const jwtMiddleware = require('../services/jwtMiddleware');


router.get('/', (req, res) => {
    connection.query('SELECT * FROM worldAssociation',
        (err, results) => {
            if (err) {
                res.status(400).send('Query Error')
            } else {
                res.status(200).json(results)
            }
        }
    )
})

router.put('/editWorldAssociation', jwtMiddleware, (req, res) => {
    connection.query('UPDATE worldAssociation SET ?',
        [req.body],
        (err, results) => {
            if (err) {
                res.status(400).json({ flash: 'Ocorreu um erro' })
            } else {
                res.status(200).json({ flash: 'Alterado com sucesso' })
            }
        }

    )
}
)

module.exports = router;