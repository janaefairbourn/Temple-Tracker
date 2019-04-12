var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = mongoose.Schema({
    maxTempleId: {type: Number, required: true}
});

module.exports = mongoose.model('Sequence', schema);