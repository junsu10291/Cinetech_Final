var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true, unique: true},
    profilePath: {type: String},
    movies: [{
        movie: {type: Schema.Types.ObjectId, ref: "Movie"},
        as: {type: String} 
    }]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Movie', schema);
