const DataTypes = require('sequelize').DataTypes;
const sequelize = require('../connection');

const user = {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
}

const User = sequelize.define('user', user);

module.exports = User;