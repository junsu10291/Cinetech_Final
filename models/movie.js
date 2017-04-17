var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true, unique: true},
    imagePath: {type: String, required: true},
    carouselPath: {type: [String]},
    trailerPath: {type: String},
    country: {type: String},
    genre: {type: String},
    director: {type: String},
    numRated: {type: Number, required: true},
    averageRatings: {type: Number},
    synopsis: {type: String},
    cast: [{type: Schema.Types.ObjectId, ref: "Actor"}]

});
schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Movie', schema);
