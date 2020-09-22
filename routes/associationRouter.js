const express = require('express');

const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../config');
const jwtMiddleware = require('../services/jwtMiddleware');

router.get('/associationHeader', (req, res) => {
    connection.query('SELECT * FROM Association_Header',
        (err, results) => {
            if (err) {
                res.status(400).send('Query Error')
            } else {
                res.status(200).json(results);
            }
        })
})


router.get('/', (req, res) => {
    connection.query('SELECT * FROM Association_Sections ORDER BY position ASC',
        (err, results) => {
            if (err) {
                res.status(400).send('Query Error')
            } else if (results.length === 0) {
                res.status(404).send('Section not found');
            } else {
                res.status(200).json(results);
            }
        });
});


router.get('/:section_id', (req, res) => {
    connection.query('SELECT * FROM Association_Sections WHERE section_id=?',
        [req.params.section_id],
        (err, results) => {
            if (err) {
                res.status(400).send('Query Error')
            } else if (results.length === 0) {
                res.status(404).send('Section not found');
            } else {
                res.status(200).json(results);
            }
        });
});



router.put('/editSection', jwtMiddleware, (req, res) => {
    connection.query('UPDATE Association_Sections SET ? WHERE section_id = ?',
        [req.body, req.body.section_id],
        (err, results) => {
            if (err) {
                res.status(400).json({ flash: 'Ocorreu um erro' })
            } else {
                res.status(200).json({ flash: 'Alterado com sucesso' })
            }
        }
    )
})

router.put('/editHeader', jwtMiddleware, (req, res) => {
    connection.query('UPDATE Association_Header SET ?',
        [req.body],
        (err, results) => {
            if (err) {
                res.status(400).json({ flash: 'Ocorreu um erro' })
                console.log(err)
            } else {
                res.status(200).json({ flash: 'Alterado com sucesso' })
            }
        }
    )
})

router.post('/newSection', jwtMiddleware, (req, res) => {
    const { section_id, ...formData } = req.body;
    connection.query('INSERT INTO Association_Sections SET ?',
        [formData],
        (err, results) => {
            if (err) {
                res.status(400).json({ flash: 'Ocorreu um erro' })
            } else {
                res.status(200).json({ flash: 'Gravado com sucesso com sucesso' })
            }
        }
    )
})

router.delete('/deleteSection/:section_id', jwtMiddleware, (req, res) => {
    connection.query('DELETE from Association_Sections WHERE section_id=?',
        [req.params.section_id],
        (err, results) => {
            if (err) {
                res.status(400).send('Error deleting section')

            } else {
                if (results.length === 0) {
                    res.status(400).send('Section nof found')
                } else {
                    res.status(200).send('Item deleted')
                }
            }
        }
    )
}
)



module.exports = router;