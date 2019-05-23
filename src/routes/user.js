const express = require('express');
const registerModel = require('./../model/register');
const router = express.Router();

router.put('/:_id' , (req, res) => {
    registerModel.updateOne( { _id: req.body._id }, req.body, (err, body) => {
        console.log(req);
        if (err) {
            console.log(err);
            return res.status(403).json({ error: 'Erro ao atualizar usuário'});
        }
        return res.status(200).json(req.body);
    });
});
router.get('/:_id' , (req, res) => {
    registerModel.find( { _id: req.body._id }, req.body, (err, body) => {
        console.log(req);
        if (err) {
            console.log(err);
            return res.status(403).json({ error: 'Erro ao buscar usuário'});
        }
        return res.status(200).json(req.body);
    });
});

module.exports = router;
