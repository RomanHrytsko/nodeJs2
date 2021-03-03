const router = require('express').Router();

const { userRouter, businessRouter } = require('./index');

router.use('/users', userRouter);
router.use('/business', businessRouter);

module.exports = router;
