'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BillSchema = Schema({
    bill_resolution_type: String,
    bill_type: String,
    committees: [{ type: Schema.Types.ObjectId, ref: 'Committee' }],
    congress: Number,
    cosponsors: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
    current_status: String,
    current_status_date: Date,
    current_status_description: String,
    current_status_label: String,
    display_number: String,
    docs_house_gov_postdate: Date,
    id: Number, //primary key
    introduced_date: Date,
    is_alive: Boolean,
    is_current: Boolean,
    link: String,
    lock_title: Boolean,
    major_actions: Array,
    noun: String,
    number: Number,
    senate_floor_schedule_postdate: Date,
    sliplawnum: String,
    sliplawpubpriv: String,
    source: String,
    source_link: String,
    sponsor: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
    sponsor_role: [{ type: Schema.Types.ObjectId, ref: 'Role' }],
    terms: Array,
    title: String,
    title_without_number: String,
    titles: Array
});

module.exports = mongoose.model('Bill', BillSchema, 'bill');
