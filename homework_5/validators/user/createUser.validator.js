// eslint-disable-next-line import/no-extraneous-dependencies
const Joi = require('joi');

const { regexpEnum } = require('../../constant');

module.exports = Joi.object({

    name: Joi.string()
        .alphanum()
        .min(2)
        .max(50),
    email: Joi.string().regex(regexpEnum.EMAIL_REGEXP).required(),
    password: Joi.string().regex(regexpEnum.PASSWORD_REGEXP).required(),
});
