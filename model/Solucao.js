var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Solucao
var solucao = new Schema({
    ideia1: String,
    ideia2: String,
    ideia3: String,
    ideiaForaCaixa: String
    clienteId: String

});

module.exports = mongoose.model('solucao', solucao);