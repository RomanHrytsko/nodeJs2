const { codesStatusEnum } = require('../constant');
const { userValidators } = require('../validators');

module.exports = {
    isUserValid: async (req, res, next) => {
        try {
            const { error } = await userValidators.createUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(codesStatusEnum.BAD_REQUEST).json(e.message);
        }
    }
};
