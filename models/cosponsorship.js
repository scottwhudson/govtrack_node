'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CosponsorshipSchema = mongoose.Schema({
    bill: Number,
    id: Number,
    joined: Date,
    person: Number,
    role: Number,
    withdrawn: Date
});

module.exports = mongoose.model('Cosponsorship', CosponsorshipSchema, 'cosponsorship');
