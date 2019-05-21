const db = require('./database');
const registerRoute = require('./routes/register');
const userRoute = require('./routes/user');
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('./config/logger');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger);
app.use('/register', registerRoute);
app.use('/user', userRoute);

const main = async () => {
  try {
    await db();
    app.listen(3000); 

  } catch (error) {
    console.log(error);
  }
};
main();