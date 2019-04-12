var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    location: {type: String},
    imagePath: {type: String},
    experience: {type: String},
    attended: {type: String}
});

module.exports = mongoose.model('Temple', schema);