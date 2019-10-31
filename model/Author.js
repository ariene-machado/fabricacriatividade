var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Cliente
var AuthorSchema = new Schema({
    nome: String,
    stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]

   
});

module.exports = mongoose.model('Author', AuthorSchema);
