var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Define collection and schema for Problema
var ProblemaSchema = new Schema({
    problema1: String,
    clienteId: String
});


module.exports = mongoose.model('Problema', ProblemaSchema);


