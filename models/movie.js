var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, unique: true},
    genres: {type: [String]},
    backdropPath: {type: String},
    posterPath: {type: String},
    trailerPath: {type: String},
    popularity: {type: Number},
    voteCount: {type: Number},
    voteAverage: {type: Number },
    country: {type: String},
    overview: {type: String},
    cast: [{type: Schema.Types.ObjectId, ref: "Actor"}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Movie', schema);
