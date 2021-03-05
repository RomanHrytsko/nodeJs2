const jwt = require('jsonwebtoken');
const O_Auth = require('../database/models/O_Auth');

const { constant } = require('../constant');
const { JWT_SECRET } = require('../configs/config');
const { error } = require('../message');

module.exports = {
    checkAccessTokenMiddleware: async (req, res, next) => {
        try {
            const { preferL = 'ua' } = req.query;
            const access_token = req.get(constant.AUTHORIZATION);

            if (!access_token) {
                throw new Error(error.TOKEN_IS_REQUIRED[preferL]);
            }

            const tokens = await O_Auth.findOne({ access_token }).populate('_user_id');

            if (!tokens) {
                throw new Error(error.TOKEN_IS_REQUIRED[preferL]);
            }

            jwt.verify(access_token, JWT_SECRET, (err) => {
                if (err) {
                    throw new Error(error.NOT_VALID_TOKEN);
                }
            });

            req.user = tokens._user_id;

            console.log(access_token);
            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};
