const userDomain = require('../../domain/user')


async function getAllUsers(req, res) {
  try {
    const users = await userDomain.getUsers()
    return res.json(users);
  } catch (error) {
    return res.json(error)
  }
}

async function createUser(req, res) {
  try {
    console.log(req);
    const userCreated = await userDomain.createUser(req?.body)
    return res.json(userCreated);
  } catch (error) {
    return res.json(error)
  }
}

async function getUserById(req, res) {
  try {
    const user = await userDomain.getUserById(parseInt(req?.params?.id))
    return res.json(user);
  } catch (error) {
    return res.json(error)
  }
}

async function editUser(req, res) {
  try {
    const user = await userDomain.editUserById(parseInt(req?.params?.id), req?.body)
    return res.json(user);
  } catch (error) {
    return res.json(error)
  }
}

async function deleteUser(req, res) {
  try {
    const user = await userDomain.deleteUserById(parseInt(req?.params?.id))
    return res.json(user);
  } catch (error) {
    return res.json(error)
  }
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  editUser,
  deleteUser
};