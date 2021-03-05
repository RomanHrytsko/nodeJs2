const { businessService } = require('../service');
const { codesStatusEnum } = require('../constant');
const { success } = require('../message');

const { passwordHasher } = require('../helpers');

module.exports = {
    getAllBusinessTypes: async (req, res) => {
        try {
            const business = await businessService.findBusiness(req.query);

            res.json(business);
        } catch (e) {
            res.status(codesStatusEnum.I_AM_TEAPOT).json(e.message);
        }
    },
    getSingleBusinessType: async (req, res) => {
        try {
            const { businessId } = req.params;

            const business = await businessService.findBusinessById(businessId);

            res.json(business);
        } catch (e) {
            res.json(e.message);
        }
    },
    createBusinessType: async (req, res) => {
        try {
            const { password } = req.body;

            const { preferL = 'ua' } = req.query;

            const hashPassword = await passwordHasher.hash(password);

            await businessService.createBusiness({ ...req.body, password: hashPassword });

            res.status(codesStatusEnum.DONE).json(success.BUSINESS_TYPE_IS_CREATED[preferL]);
        } catch (e) {
            res.json(e.message);
        }
    },
    deleteBusinessType: async (req, res) => {
        try {
            const { preferL } = req.query;

            const { businessId } = req.params;

            await businessService.deleteBusiness(businessId);

            res.status(codesStatusEnum.DONE).json(success.BUSINESS_TYPE_IS_DELETED[preferL]);
        } catch (e) {
            res.status(codesStatusEnum.BAD_REQUEST).json(e.message);
        }
    }
};
