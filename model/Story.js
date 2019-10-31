const mongoose = require("mongoose");
var Schema = mongoose.Schema;



// Define collection and schema for Cliente
var StorySchema = new Schema({
   
   author : { type: Schema.Types.ObjectId, ref: 'Author' },
  title    : String
   
});

module.exports = mongoose.model('Story', StorySchema);
