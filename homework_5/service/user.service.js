// eslint-disable-next-line import/no-unresolved
const User = require('../dataBase/models/User');

module.exports = {
    findUsers: (filterObject) => User.find(filterObject),

    findUserById: (userID) => User.findById(userID),

    createUser: (userObject) => User.create(userObject),

    deleteUser: (userId) => User.findByIdAndRemove(userId)
};
