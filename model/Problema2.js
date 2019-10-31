var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Define collection and schema for Problema
var Problema2Schema = new Schema({
    problema2: String,
    clienteId: String
});

module.exports = mongoose.model('Problema2', Problema2Schema);


