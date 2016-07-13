'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BillSchema = mongoose.Schema({
    bill_resolution_type: String,
    bill_type: String,
    committees: Array,
    congress: Number,
    cosponsors: Array,
    current_status: String,
    current_status_date: Date,
    current_status_description: String,
    current_status_label: String,
    display_number: String,
    docs_house_gov_postdate: Date,
    id: Number,
    introduced_date: Date,
    is_alive: Boolean,
    is_current: Boolean,
    link: String,
    lock_title: Boolean,
    major_actions: Array,
    noun: String,
    number: Number,
    related_bills: Array,
    senate_floor_schedule_postdate: Date,
    sliplawnum: String,
    sliplawpubpriv: String,
    source: String,
    source_link: String,
    sponsor: Object, // PersonModel
    sponsor_role: Object, // RoleModel
    terms: Array,
    title: String,
    title_without_number: String,
    titles: Array
});

module.exports = mongoose.model('Bill', BillSchema, 'bill');
