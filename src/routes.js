const Router =  require('express').Router;
const context =  require('./context');

const router = Router();
router.use('/users', context);

module.exports = router;