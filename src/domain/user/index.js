const userRepository = require('../../db/repositories/userRepository');

const userMocks = [
    {
        id: 1,
        firstName: 'Rafael',
        lastName: 'Pegoretti',
        age: 23,
        email: 'rafael@email.com'
    },
    {
        id: 2,
        firstName: 'Lino',
        lastName: 'Pegoretti',
        age: 45,
        email: 'lino@email.com'
    },
]

async function getUsers() {
    return await userRepository.getAllUsers();
}

async function createUser(user) {
    if (!user || !user.firstName || !user.lastName || !user.age || !user.email) {
        throw new Error('Prencha todos os dados necessários!')
    }
    return await userRepository.createUser(user);
}

async function getUserById(userId) {
    if (!userId) {
        throw new Error('Id do usuário é necessário!')
    }
    const userFound = await userRepository.getUserById(userId);
    if (!userFound) {
        throw new Error('Usuário não encontrado')
    }
    return userFound
}

async function editUserById(userId, user) {
    if (!userId) {
        throw new Error('Id do usuário é necessário!')
    }
    return await userRepository.editUser(userId, user);
}

async function deleteUserById(userId) {
    if (!userId) {
        throw new Error('Id do usuário é necessário!')
    }
    return await userRepository.deleteUser(userId);
}


module.exports = {
    createUser,
    getUsers,
    getUserById,
    editUserById,
    deleteUserById
}