var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/', function (req, res, next) {
    var user = new User({
        userName: req.body.userName,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email,
        numRated: 0
    });

    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: "hihi",
                error: err
            });
        }

        res.status(201).json({
            message: "user created",
            obj: result
        });
    });
});

router.get('/:userId', function(req, res, next) {
    let userId = req.params.userId;
    User.find({"_id": userId}).exec(function(err, user) {
         if (err) {
            return res.status(500).json({
                title: "An error occured",
                error: err
            });
        }

        if (!user) {
            return res.status(500).json({
                title: "Couldn't find user",
                error: err
            });
        }   

        res.status(200).json({
            message: "success",
            obj: user
        });
    });
});

router.post('/signin', function (req, res, next) {
    User.findOne({ userName: req.body.userName }, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: "hihi",
                error: err
            });
        }

        if (!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }

        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }

        var token = jwt.sign({ user: user }, 'secret', {expiresIn: 7200});
        
        res.status(200).json({
            message: "successfully logged in",
            token: token,
            userId: user._id
        });
    });
});

module.exports = router;