const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const { DB_USER, DB_PASS, DB_HOST } = process.env;
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`;

module.exports = () => new Promise((resolve, reject) => {
    mongoose.connect(uri, { useNewUrlParser: true });

    mongoose.set('useCreateIndex', true);

    mongoose.connection.on('error', () => {
      console.log('Erro na conexão com o banco de dados: ');
      reject(mongoose.connection);
    });

    mongoose.connection.once('open', () => {
      console.log('Aplicação conectada ao banco de dados: ');
      resolve(mongoose.connection);
    });
});
