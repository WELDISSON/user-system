const Joi = require('joi');

const register_Schema = () => {
    const schemaS = Joi.object().keys({
    _id: Joi.string().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
    cpf: Joi.number().required(),
    endereco: Joi.string().required()
    });
    return schemaS
}

module.exports = {
    register_Schema
}