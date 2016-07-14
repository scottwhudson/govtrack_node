'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommitteeMemberSchema = Schema({
    committee: [{ type: Schema.Types.ObjectId, ref: 'Committee' }],
    id: Number,
    person: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
    role: String
});

module.exports = mongoose.model('CommitteeMember', CommitteeMemberSchema, 'committeemember');
