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

module.exports = router;