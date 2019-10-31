var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Define collection and schema for Problema
var Problema2Schema = new Schema({
    problema2: String
    clienteId: String,
    userId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Cliente'
    }

});

module.exports = mongoose.model('Problema2', Problema2Schema);


