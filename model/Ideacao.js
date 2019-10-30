var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Solucao
var ideacao = new Schema({
    ideiaIdeacao: String,
    tipoIdeacao: String,
    clienteId: String

});

module.exports = mongoose.model('ideacao', ideacao);