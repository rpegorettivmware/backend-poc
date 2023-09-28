const User = require('../models/user');

async function getAllUsers(user) {
    return await User.findAll();
}

async function createUser(user) {
    return await User.create(user);;
}

async function getUserById(id) {
    return await User.findByPk(id);
}

async function editUser(id, user) {
    const userFound = await User.findByPk(id);
    await userFound.update(user);
    return await userFound.save();
}

async function deleteUser(id, user) {
    const userFound = await User.findByPk(id);   
    return await userFound.destroy();
}


module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    editUser,
    deleteUser
}