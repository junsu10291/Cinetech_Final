var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    numRated: {type: number, required: true},
    movieRatings : [{
        movie: String,
        rating: number
    }]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);