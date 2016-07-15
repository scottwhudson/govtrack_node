'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = Schema({
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
    related_bill: [{ type: Schema.Types.ObjectId, ref: 'Bill' }], //bill
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
