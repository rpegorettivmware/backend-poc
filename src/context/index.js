const Router =  require('express').Router;
const userContext = require('./user');

const router = Router();

router.route('/')
  .get(userContext.getAllUsers)
  .post(userContext.createUser);

router.route('/:id')
  .get(userContext.getUserById)
  .put(userContext.editUser)
  .delete(userContext.deleteUser);

module.exports = router;