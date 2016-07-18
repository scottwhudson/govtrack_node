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

module.exports = mongoose.model('Cosponsorship', CosponsorshipSchema, 'cosponsorship');
