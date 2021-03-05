const { codesStatusEnum } = require('../constant');
const { userValidators, idValidator } = require('../validators');

module.exports = {
    isUserValid: async (req, res, next) => {
        try {
            const { error } = await userValidators.creteUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(codesStatusEnum.BAD_REQUEST).json(e.message);
        }
    },
    isIdValid: async (req, res, next) => {
        try {
            const { userId } = req.params;

            const { error } = await idValidator.id.validate(userId);
            if (error) {
                throw new Error(error.details[0].message);
            }
            next();
        } catch (e) {
            res.status(codesStatusEnum.BAD_REQUEST).json(e.message);
        }
    }
};
