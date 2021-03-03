const router = require('express').Router();

const { userController } = require('../controller');
const { userMiddlewares } = require('../middleware');

router.get('/', userController.getAllUsers);

router.get('/:userId', userMiddlewares.isIdValid, userController.getSingleUser);

router.post('/', userMiddlewares.isUserValid, userController.createUser);

router.delete('/:userId', userController.deleteUser);

module.exports = router;
