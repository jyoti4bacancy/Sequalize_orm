const Sequelize = require('sequelize');
const sequelize = new Sequelize("testdb", "root", "4699", {
    host: "127.0.0.1",
    dialect: "mysql"
  });
  module.exports=sequelize;
  global.sequelize=sequelize;