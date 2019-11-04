var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Define collection and schema for Photo
var PhotoSchema = new Schema({
    imageUrl: String,
    clienteId: String

});


module.exports = mongoose.model('Photo', PhotoSchema);