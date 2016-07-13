'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VoteVoterSchema = mongoose.Schema({
    created: Date,
    id: Number, //primary key
    option: Object,
    person: Object, //person
    person_role: Object, //role
    vote: Object, //vote
    voter_type: String,
    voter_type_label: String,
    voteview_extra_code: String
});

module.exports = mongoose.model('VoteVoter', VoteVoterSchema, 'votevoter');
