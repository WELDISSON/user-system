const express = require('express');
const registerModel = require('./../model/register');
const router = express.Router();

router.post('/', (req, res) => {
    registerModel.create(req.body, (err, body) => {
        if (err) {
            console.log('Erro ao criar usuário: ', err);
            return res.status(403).json({ error: 'Erro ao criar usuário' });
        }
        console.log(body);
        return res.status(200).json(body);
    });
});

module.exports = router;
