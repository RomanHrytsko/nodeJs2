const jwt = require('jsonwebtoken');

module.exports = () => {
    const access_token = jwt.sign({}, 'JWT_SECRET', { expiresIn: '30m' });
    const refresh_token = jwt.sign({}, 'JWT_REFRESH', { expiresIn: '30d' });

    return {
        access_token,
        refresh_token
    };
};
// {
//     "password": "asdasad323s@43D" ,
//     "email": "rolwadwadik@gmail.com"
// }
