var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Define collection and schema for Photo
var PhotoSchema = new Schema({
    image: Buffer,
   contentType: String
});


module.exports = mongoose.model('Photo', PhotoSchema);