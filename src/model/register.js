const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
var emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var cpfRegex = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/; // EX: 123.124.432-55

const RegisterSchema = new Schema({
    name: { type:String, required: true },
    password: { type:String, required: true },
    email: { type:String, required: true, unique: true, match: [emailRegex, 'Por favor insira um Email Válido!'] },
    cpf: { type: String, required: true, match: [cpfRegex, 'Por favor insira um CPF Válido!'] },
    endereco: String
});

RegisterSchema.plugin(uniqueValidator);



module.exports = mongoose.model('Register', RegisterSchema);