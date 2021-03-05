const { userService } = require('../service');
const { success } = require('../message');
const { codesStatusEnum } = require('../constant');

const { passwordHasher } = require('../helpers');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.findUsers(req.query);

            res.json(users);
        } catch (e) {
            res.status(codesStatusEnum.I_AM_TEAPOT).json(e.message);
        }
    },

    getSingleUser: async (req, res) => {
        try {
            const { userId } = req.params;

            const user = await userService.findUserById(userId);

            res.json(user);
        } catch (e) {
            res.json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            const { password } = req.body;

            const { preferL = 'ua' } = req.query;

            const hashPassword = await passwordHasher.hash(password);

            await userService.createUser({ ...req.body, password: hashPassword });

            res.status(codesStatusEnum.DONE).json(success.USER_IS_CREATED[preferL]);
        } catch (e) {
            res.json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { preferL = 'ua' } = req.query;

            const { userId } = req.body;

            await userService.deleteUser(userId);

            res.status(codesStatusEnum.DONE).json(success.USER_IS_DELETED[preferL]);
        } catch (e) {
            res.status(codesStatusEnum.BAD_REQUEST).json(e.message);
        }
    }

};
