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

function getUsers() {
    return userMocks
}

function createUser(user) {
    if (!user || !user.firstName || !user.lastName || !user.age || !user.email) {
        throw new Error('Prencha todos os dados necessários!')
    }
    return user
}

function getUserById(userId) {
    if (!userId) {
        throw new Error('Id do usuário é necessário!')
    }
    const userFound = userMocks.find(user => user.id == userId)
    if (!userFound) {
        throw new Error('Usuário não encontrado')
    }
    return userFound
}

function editUserById(userId, user) {
    if (!userId) {
        throw new Error('Id do usuário é necessário!')
    }
    const userFound = userMocks.find(user => user.id == userId)
    if (!userFound) {
        throw new Error('Usuário não encontrado')
    }
    return user
}

function deleteUserById(userId) {
    if (!userId) {
        throw new Error('Id do usuário é necessário!')
    }
    return userId
}


module.exports = {
    createUser,
    getUsers,
    getUserById,
    editUserById,
    deleteUserById
}