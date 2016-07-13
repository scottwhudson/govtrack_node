'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = mongoose.Schema({
    bioguideid: Number,
    birthday: Date,
    committeeassignments: Array, // array of committees
    cspanid: Number,
    firstname: String,
    gender: String,
    id: Number, //primary key
    lastname: Number,
    link: String,
    middlename: String,
    name: String,
    namemod: String,
    nickname: String,
    osid: String,
    pvsid: Number,
    roles: Array, // array of roles
    sortname: String,
    twitterid: String,
    youtubeid: String
});

module.exports = mongoose.model('Person', PersonSchema, 'person');
