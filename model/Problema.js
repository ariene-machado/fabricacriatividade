var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Define collection and schema for Problema
var ProblemaSchema = new Schema({
    problema1: String,
    porque1: String,
    porque2: String,
    porque3: String,
    problemaRaiz: String,
    clienteId: String,
    userId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Cliente'
    }

});


module.exports = mongoose.model('Problema', ProblemaSchema);


