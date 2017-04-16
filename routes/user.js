var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.post('/', function (req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email, // encrypt later
        password: req.body.password
    });

    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }

        res.status(201).json({
            message: "User Created",
            obj: result
        });
    }); 
});

router.post('/signin', function(req, res, next) {
    User.findOne({email: req.body.email}, function(err, user) {
        if (err) {
            return res.status(500).json({
                message: "An error occured",
                error: err
            });
        }

        if (!user) {
            return res.status(401).json({
                message: "User not found",
                error: {message: "User could not be found"}
            });
        }

        const enteredPassword = req.body.password;
        const compare = user.password;

        if (enteredPassword == compare) {
            // password is correct
        } else {
            return res.status(401).json({
                message: "User not found",
                error: {message: "User could not be found"}
            });
        }
    });
});

module.exports = router;