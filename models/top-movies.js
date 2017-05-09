var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, unique: true},
    genre: {type: String},
    backdrop_path: {type: String},
    poster_path: {type: String},
    trailer_path: {type: String},
    runtime: {type: Number},
    vote_count: {type: Number},
    vote_average: {type: Number },
    country: {type: String},
    overview: {type: String},
    cast : [{
        name: String,
        profilePath: String,
        character: String
    }]  
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Movie', schema);