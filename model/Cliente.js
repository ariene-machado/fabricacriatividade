var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Cliente
var cliente = new Schema({
    nome: String,
    email: String,
    whatsApp: String,
    clienteId: String

});

module.exports = mongoose.model('cliente', cliente);