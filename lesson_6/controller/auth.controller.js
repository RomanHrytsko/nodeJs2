const User = require('../database/models/User');
const O_Auth = require('../database/models/O_Auth');

const { error } = require('../message');
const { passwordHasher, tokenizer } = require('../helpers');

module.exports = {

    authUser: async (req, res) => {
        try {
            const { preferL = 'ua' } = req.query;

            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                throw new Error(error.NO_USER[preferL]);
            }

            await passwordHasher.compare(password, user.password);

            const tokens = tokenizer();

            await O_Auth.create({ ...tokens, _user_id: user._id });
            res.json(tokens);
        } catch (e) {
            res.json(e.message);
        }
    }
};
