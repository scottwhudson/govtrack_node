'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CosponsorshipSchema = Schema({
    bill: Number,
    id: Number,
    joined: Date,
    person: Number,
    role: Number,
    withdrawn: Date
});

CosponsorshipSchema.methods.joiValidate = function(obj) {
    const Joi = require('joi');
    const schema = {
      bill: Joi.number().integer().required(),
      id: Joi.number().integer().required(),
      joined: Joi.date(),
      person: Joi.number().integer(),
      role: Joi.number().integer(),
      withdrawn: Joi.date()
    }

    return Joi.validate(obj, schema);
}

module.exports = mongoose.model('Cosponsorship', CosponsorshipSchema, 'cosponsorship');
