const { Schema, model } = require('mongoose');

const { dataBaseTablesEnum: { USER } } = require('../../constant');

const userScheme = new Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 15 },
    password: { type: String },
    email: { type: String }
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

module.exports = model(USER, userScheme);
