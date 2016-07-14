'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CosponsorshipSchema = Schema({
    bill: Number,
    id: Number,
    joined: Date,
    person: Number,
    role: Number,
    withdrawn: Date
});

CosponsorshipSchema.methods.joiValidate = function(obj) {
    var Joi = require('joi');
    var schema = {
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
