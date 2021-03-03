const router = require('express').Router();

const { businessController } = require('../controller');
const { businessMiddleware } = require('../middleware');

router.get('/', businessController.getAllBusinessTypes);

router.get('/:businessId', businessMiddleware.isIdValid, businessController.getSingleBusinessType);

router.post('/', businessMiddleware.isBusinessAccValid, businessController.createBusinessType);

router.delete('/', businessController.deleteBusinessType);

module.exports = router;
