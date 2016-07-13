'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommitteeMemberSchema = mongoose.Schema({
    committee: Array,
    id: Number,
    person: Array,
    role: String
});

module.exports = mongoose.model('CommitteeMember', CommitteeMemberSchema, 'committeemember');
