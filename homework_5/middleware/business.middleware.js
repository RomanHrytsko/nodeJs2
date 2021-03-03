const { codesStatusEnum } = require('../constant');
const { businessValidator } = require('../validators');

module.exports = {
    isBusinessAccValid: async (req, res, next) => {
        try {
            const { error } = await businessValidator.createBusiness.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }
            next();
        } catch (e) {
            res.status(codesStatusEnum.BAD_REQUEST).json(e.message);
        }
    }
};
