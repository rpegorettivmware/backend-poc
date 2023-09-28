const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'mysecretpassword', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
})


module.exports = sequelize;