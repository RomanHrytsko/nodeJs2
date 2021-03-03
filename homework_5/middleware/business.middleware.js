const { codesStatusEnum } = require('../constant');
const { businessValidator, idValidator } = require('../validators');

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
    },
    isIdValid: async (req, res, next) => {
        try {
            const { businessId } = req.params;

            const { error } = await idValidator.id.validate(businessId);
            if (error) {
                throw new Error(error.details[0].message);
            }
            next();
        } catch (e) {
            res.status(codesStatusEnum.BAD_REQUEST).json(e.message);
        }
    }
};
