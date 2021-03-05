const Business = require('../database/models/Bussines');

module.exports = {
    findBusiness: (filterObject) => Business.find(filterObject),

    findBusinessById: (businessId) => Business.findById(businessId),

    createBusiness: (businessObject) => Business.create(businessObject),

    deleteBusiness: (businessId) => Business.findByIdAndRemove(businessId)
};
