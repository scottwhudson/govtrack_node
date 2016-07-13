'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = mongoose.Schema({
    name: String,
    gender: String,
    id: Number
});

module.exports = mongoose.model('Person', PersonSchema, 'person');
