const router = require('express').Router();

const { authController } = require('../controller');

router.post('/', authController.authUser);

module.exports = router;

// {
//     "password": "asdasad323s@43D" ,
//     "email": "rolwadwadik@gmail.com"
// }
// {
// eslint-disable-next-line max-len
//     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTQ5NTY2ODAsImV4cCI6MTYxNDk1NzI4MH0.lmUg0UDPBRHTdAuXC5veNRvp5GEvOXAVtcvDIIL_jg4",
// eslint-disable-next-line max-len
//     "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTQ5NTY2ODAsImV4cCI6MTYxNzU0ODY4MH0.R0V5KKyuBehlbX0jPy_ZZRWYzYR7i1F7mbuTU3LZxWk"
// }
