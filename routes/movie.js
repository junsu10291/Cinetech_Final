var express = require('express');
var router = express.Router();
var Movie1 = require('../models/movie');
var User = require('../models/user');

router.get('/search/:search', function(req, res, next) {
    let search = req.params.search;

    Movie1.find({"title": new RegExp(search, "i") }, function(err, movies) {
        
        if (err) {
            return res.status(500).json({
                title: "An error occuredlkwmlkm",
                error: err
            });
        }

        if (!movies) {
            return res.status(500).json({
                title: "An error occured; no movie found",
                error: err
            });
        }
        console.log("results from movies.js mothafucka");
        console.log("length");
        console.log(movies.length);
        console.log(movies);

        return res.status(200).json({
            message: "success",
            obj: movies
        });
    });
});

router.get('/topMovies/:genre', function(req, res, next) {
    let genre = req.params.genre;

    if(genre.toString() === "recommendation") {
        Movie1.find().sort('-vote_average').limit(19)
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
        Movie1.find({"genre": genre}).limit(19).exec(function(err, movies) {
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
    let pastRating = null;

    User.findOne({'_id': userId}, function(err, object) {
        if (err) {
            return res.status(500).json({
                title: "An error occured finding users",
                error: err
            });
        }

        if (!object) {
            return res.status(500).json({
                title: "An error occured, no user with given user id",
                error: err
            });
        }

        console.log("user");
        console.log(object);

        let movieRatings = object.movieRatings;

        for (let i = 0; i < movieRatings.length; i++) {
            if (movieRatings[i].movie.toString() === movieId) {
                pastRating = movieRatings[i].rating;
                movieRatings[i].rating = rating;
                foundMovie = true;
            }
        }

        if (!foundMovie) {
            movieRatings.push({'movie': movieId, 'rating': rating});
        }

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

            let movieAverage = movie.vote_average;
            let movieVoteCount = movie.vote_count;

            let updatedMovieAverage = null;
            let updatedMovieVoteCount = null;

            if (foundMovie) {
                console.log("found movie");
                updatedMovieAverage = (movieAverage * movieVoteCount - pastRating + rating) / (movieVoteCount);
                updatedMovieVoteCount = movieVoteCount;
            } else { // new vote
                console.log("didn't find movie");
                updatedMovieAverage = (movieAverage * movieVoteCount + rating) / (movieVoteCount + 1);
                updatedMovieVoteCount = movieVoteCount + 1;
            }

            console.log(updatedMovieAverage);
            console.log(updatedMovieVoteCount);

            movie.vote_average = updatedMovieAverage;
            movie.vote_count = updatedMovieVoteCount;

            movie.save(function(err, saveRes) {
                if (err) {
                    return res.status(500).json({
                        title: "An error occured saving movie",
                        error: err
                    });
                }

                // saving the user
                object.save(function(err, saveRes) {
                    if (err) {
                        return res.status(500).json({
                            title: "An error occured saving user",
                            error: err
                        });
                    }

                    res.status(200).json({
                            message: "success",
                            obj: rating
                    });
                });
            });
        });
    });
});

module.exports = router;