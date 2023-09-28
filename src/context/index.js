const Router =  require('express').Router;
const userContext = require('./user');

const router = Router();

router.use('/users', userContext);


module.exports = router;