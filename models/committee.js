'use strict';

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var CommitteeSchema = Schema({
    abbrev: String,
    code: String,
    committee: [{ type: Schema.Types.ObjectId, ref: 'Committee' }],
    committee_type: String,
    committee_type_label: String,
    id: Number,
    jurisdiction: String,
    jurisdiction_link: String,
    name: String,
    obsolete: Boolean,
    url: String
});

module.exports = mongoose.model('Committee', CommitteeSchema, 'committee');
