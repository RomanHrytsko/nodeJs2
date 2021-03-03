const { Schema, model } = require('mongoose');

const { dataBaseTablesEnum: { BUSINESS } } = require('../../constant');

const businessSchema = new Schema({
    industry: { type: String, required: true },
    capitalization: { type: Number, required: true },
    profit: { type: Number, required: true },
    password: { type: String, required: true }
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

module.exports = model(BUSINESS, businessSchema);
