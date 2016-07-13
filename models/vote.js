'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VoteSchema = mongoose.Schema({
    category: String,
    category_label: String,
    chamber: String,
    congress: Number,
    created: Date,
    id: Number, //primary key
    link: String,
    margin: Number,
    missing_data: Boolean,
    number: Number,
    options: Object, //VoteOption
    percent_plus: Number,
    question: String,
    question_details: String,
    related_amendment: Number,
    related_bill: Object, //bill
    required: Number,
    result: String,
    session: String,
    source: String,
    total_minus: Number,
    total_other: Number,
    total_plus: Number,
    vote_type: String
});

module.exports = mongoose.model('Vote', VoteSchema, 'vote');
