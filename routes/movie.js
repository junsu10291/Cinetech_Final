var express = require('express');
var router = express.Router();
var Movie1 = require('../models/movie');
var User = require('../models/user');

router.get('/topMovies/:genre', function(req, res, next) {
    let genre = req.params.genre;

    if(genre.toString() === "recommendation") {
        Movie1.find().sort('-popularity').limit(20)
        .exec(function(err, movies) {
            if (err) {
                return res.status(500).json({
                    title: "An error occured",
                    error: err
                });
            }

            if (!movies) {
                return res.status(500).json({
                    title: "Couldn't find any movies",
                    error: err
                });
            }   

            res.status(200).json({
                message: "success",
                obj: movies
            });
        });
    } else {
        Movie1.find({"genre": genre}).exec(function(err, movies) {
            if (err) {
                return res.status(500).json({
                    title: "An error occured",
                    error: err
                });
            }

            if (!movies) {
                return res.status(500).json({
                    title: "Couldn't find movie",
                    error: err
                });
            }   

            res.status(200).json({
                message: "success",
                obj: movies
            });
        });
    }    
});
//new
router.get('/:movieId', function(req, res, next) {
    console.log('anybody find me somebody to love')
    let movieId = req.params.movieId;

    Movie1.findOne({'_id': movieId}, function(err, movie) {
        if (err) {
            return res.status(500).json({
                title: "An error occured",
                error: err
            });
        }

        if (!movie) {
            return res.status(500).json({
                title: "An error occured; no movie found",
                error: err
            });
        }

        res.status(200).json({
            message: "success",
            obj: movie
        });
    });
});




router.get('/:userId/:movieId', function(req, res, next) {
    let userId = req.params.userId;
    let movieId = req.params.movieId;
    var rating = 0;

    User.findOne({'_id': userId}, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: "An error occured",
                error: err
            });
        }

        if (!user) {
            return res.status(500).json({
                title: "An error occured",
                error: err
            });
        }

        var movies = user.movieRatings;
        console.log(user);
        console.log(movieId);

        for (let i =0; i < movies.length; i ++) {
            if (movies[i].movie.toString() === movieId) {
                rating = movies[i].rating;
            }
        }

        res.status(200).json({
            message: "success",
            obj: rating
        });
    });
});

router.patch('/updateStars', function(req, res, next) {
    let userId = req.body.userId;
    let movieId = req.body.movieId;
    let rating = req.body.rating;
    let foundMovie = false;

    User.findOne({'_id': userId}, function(err, object) {
        if (err) {
            return res.status(500).json({
                title: "An error occured",
                error: err
            });
        }

        if (!object) {
            return res.status(500).json({
                title: "An error occured",
                error: err
            });
        }

        console.log("user");
        console.log(object);

        let movieRatings = object.movieRatings;

        for (let i = 0; i < movieRatings.length; i++) {
            if (movieRatings[i].movie.toString() === movieId) {
                movieRatings[i].rating = rating;
                foundMovie = true;
            }
        }

        if (!foundMovie) {
            movieRatings.push({'movie': movieId, 'rating': rating});
        }

        object.save(function(err, saveRes) {
            if (err) {
                return res.status(500).json({
                    title: "An error occured",
                    error: err
                });
            }

            res.status(200).json({
                message: "success",
                obj: rating
            });
        });
    });

    // User.update({'userId': userId, 'movieRatings.movie': movieId}, 
    // { '$set' : {'movieRatings.$.rating': rating}, '$inc' : {'numRated': 1}},
    
    //     function(err, object) {
    //         if (err) {
    //             return res.status(500).json({
    //                 title: "An error occured",
    //                 error: err
    //             });
    //         }

    //         res.status(200).json({
    //             message: "success",
    //             obj: rating
    //         });
    //     }
    // );
});



module.exports = router;