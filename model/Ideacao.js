var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Solucao
var ideacao = new Schema({
    ideacao1: String,
    ideacao2: String

});

module.exports = mongoose.model('ideacao', ideacao);