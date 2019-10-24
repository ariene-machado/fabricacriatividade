var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Cliente
var Cliente = new Schema({
    nome: String,
    email: String,
    whatsApp: String
});

module.exports = mongoose.model('Cliente', Cliente);

