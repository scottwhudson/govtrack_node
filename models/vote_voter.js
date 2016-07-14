'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VoteVoterSchema = Schema({
    created: Date,
    id: Number, //primary key
    option: Object,
    person: [{ type: Schema.Types.ObjectId, ref: 'Person' }], //person
    person_role: [{ type: Schema.Types.ObjectId, ref: 'Role' }], //role
    vote: [{ type: Schema.Types.ObjectId, ref: 'Vote' }], //vote
    voter_type: String,
    voter_type_label: String,
    voteview_extra_code: String
});

module.exports = mongoose.model('VoteVoter', VoteVoterSchema, 'votevoter');
