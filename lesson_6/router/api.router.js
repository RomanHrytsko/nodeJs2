const router = require('express').Router();

const { userRouter, businessRouter, authRouter } = require('./index');

router.use('/users', userRouter);
router.use('/business', businessRouter);
router.use('/auth', authRouter);

module.exports = router;
