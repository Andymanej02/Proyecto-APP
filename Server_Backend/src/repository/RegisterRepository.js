const UserModel = require('../models/registerModel');

async function createUser(user) {
    return UserModel.create(user);
}

async function findUserByEmail(email) {
    return UserModel.findOne({ email });
}

async function findUserByUsername(username) {
    return UserModel.findOne({ username });
}

module.exports = {
    createUser,
    findUserByEmail,
    findUserByUsername,
};
