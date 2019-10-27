var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Solucao
var PhotoSchema = new Schema({
    img: { data: Buffer, contentType: String }
});

module.exports = mongoose.model('Photo', PhotoSchema);