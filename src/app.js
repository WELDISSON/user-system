const db = require('./database');
const registerRoute = require('./routes/register');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', registerRoute);

const main = async () => {
  try {
    await db();
    app.listen(3000); 

  } catch (error) {
    console.log(error);
  }
};
main();