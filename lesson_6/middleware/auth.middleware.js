const jwt = require('jsonwebtoken');

const O_Auth = require('../database/models/O_Auth');

module.exports = {
    checkAccessTokenMiddleware: async (req, res, next) => {
        try {
            const access_token = req.get('Authorization');
            // const { userId } = req.params();

            if (!access_token) {
                throw new Error('Token is required 1');
            }

            const tokens = await O_Auth.findOne({ access_token }).populate('_user_id');

            console.log('------------------------------');
            console.log(tokens);
            console.log('------------------------------');

            if (!tokens) {
                throw new Error('Token is required 2');
            }

            jwt.verify(access_token, 'JWT_SECRET', (err) => {
                if (err) {
                    throw new Error('not valid token');
                }
            });

            console.log(access_token);
            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};
