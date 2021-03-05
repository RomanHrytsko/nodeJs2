// eslint-disable-next-line import/no-unresolved,import/no-extraneous-dependencies
const Joi = require('Joi');

const { regexpEnum } = require('../../constant');

module.exports = Joi.object({
    industry: Joi.string().alphanum().min(2).max(50)
        .required(),
    capitalization: Joi.number().min(2).required(),
    profit: Joi.number().min(2).required(),
    password: Joi.string().regex(regexpEnum.PASSWORD_REGEXP).required()
});
