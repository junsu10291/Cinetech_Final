var express = require('express');
var router = express.Router();

var Message = require('../models/movie');
var TheatreTopMovies = require('../models/top-movies');

router.get('/topMovies/:genre', function(req, res, next) {
    findGenre = req.body.genre;

    TopGenreMovies.find( { genre: findGenre } )
        .exec(function(err, messages) {
            if (err) {
                return res.status(500).json({
                    title: "An error occured",
                    error: err
                });
            }

            res.status(200).json({
                message: "Sucess",
                obj: messages
            });
        });
});

router.get('/:username/:movieId', function(req, res, next) {
    let username = req.params.username;
    let movieId = req.params.movieId;
    var score = 0;

    User.findOne({userName: username}, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: "An error occured",
                error: err
            });
        }

        var movies = user.map(function(user) { return user.movieRatings; });
        
        for (let i =0; i < movies.length; i ++) {
            if (movies[i].movie === movieId) {
                score = movies[i].score;
            }
        }

        res.status(200).json({
            message: "success",
            obj: score
        });
    });
});

module.exports = router;