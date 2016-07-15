'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommitteeMemberSchema = Schema({
    committee: [{ type: Schema.Types.ObjectId, ref: 'Committee' }],
    id: Number,
    person: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
    role: String
});

module.exports = mongoose.model('CommitteeMember', CommitteeMemberSchema, 'committeemember');
