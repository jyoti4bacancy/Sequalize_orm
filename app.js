const express = require('express');
var bodyParser = require('body-parser');
const {Op}=require('Sequelize')
const sequelize=require('./src/database/connection')
const user=require('./models/user')
const router=require('./src/utils/crud')
const app = express();
const port = 3000;
app.use(bodyParser.json());
sequelize.sync()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  app.use("/",router);


app.listen(port, () => console.log(`notes-app listening on port ${port}!`));
module.exports.user=user;