'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoleSchema = mongoose.Schema({
    caucus: String,
    congress_numbers: Array,
    current: Boolean,
    description: String,
    district: Number,
    enddate: Date,
    extra: Object,
    id: Number, //primary key
    leadership_title: String,
    party: String,
    person: Object,
    phone: String,
    role_type: String,
    senator_class: String,
    senator_rank: String,
    startdate: Date,
    state: String,
    title: String,
    title_long: String,
    website: String
});

module.exports = mongoose.model('Role', RoleSchema, 'role');
