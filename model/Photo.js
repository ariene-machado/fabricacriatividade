var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Define collection and schema for Photo
var PhotoSchema = new Schema({
    clienteId: String,
    imgURL: String,
    imgId: String,
    fileImage1: String,

});


module.exports = mongoose.model('Photo', PhotoSchema);