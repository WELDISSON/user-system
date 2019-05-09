const express = require('express');
const registerModel = require('./../model/register');
const router = express.Router();

router.post('/register', (req, res) => {
    registerModel.create(req.body, (err, body) => {
        if (err) {
            if ( err.errors.email.message ) {
                console.log('Erro ao criar usuário: ', err);
                return res.status(403).json({ error: err.errors.email.message });
            }
            console.log('Erro ao criar usuário: ', err);
            return res.status(403).json({ error: 'Erro ao criar usuário' });
        }
        console.log(body);
        return res.status(200).json(body);
    });
});

router.put('/register/:_id' , (req, res) => {
    registerModel.updateOne( { _id: req.body._id }, req.body, (err, body) => {
        console.log(req);
        if (err) {
            console.log(err);
            return res.status(403).json({ error: 'Erro ao atualizar usuário'});
        }
        return res.status(200).json(req.body);
    });
});

module.exports = router;
