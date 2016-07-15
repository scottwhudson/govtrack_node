'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = Schema({
    bioguideid: Number,
    birthday: Date,
    committeeassignments: [{ type: Schema.Types.ObjectId, ref: 'Committee' }],
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
    roles: [{ type: Schema.Types.ObjectId, ref: 'Role' }], // array of roles
    sortname: String,
    twitterid: String,
    youtubeid: String
});

module.exports = mongoose.model('Person', PersonSchema, 'person');
