var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Cliente
var ClienteSchema = new Schema({
    nome: String,
    email: String,
    whatsApp: String,
    clienteId: String,
    problema : [
        {type: mongoose.Schema.Types.ObjectId,ref:'Problema'}
    ]
});

module.exports = mongoose.model('Cliente', ClienteSchema);