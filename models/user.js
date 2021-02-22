const Sequelize=require('sequelize');
const sequelize = require('../src/database/connection');
const user=sequelize.define('user',{
    uuid:{
        type:Sequelize.UUID,
        primaryKey:true,
        defaultValue:Sequelize.UUIDV4
    },
    name:Sequelize.STRING,
    bio: Sequelize.TEXT
})
module.exports=user