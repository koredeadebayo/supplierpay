const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');

 
//Register
router.post('/register', (req, res, next) =>{
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    // console.log(req.body.name);

    User.addUser(newUser, (err, user) =>{
        if(err){
            res.json({success: false, msg: 'Failed to register user'});
        }else{
            res.json({success: true, msg: 'User has been registered successfully'});
        }
    });
}); 

//Authenticate
router.post('/auth', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) =>{
        if(err) throw err;
        if(!user){
        res.json({success: false, msg: 'User not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch) =>{
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 // 1 week
                });
                res.json({
                    success: true,
                    token: 'JWT '+ token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            }else{
                res.json({
                    success: false,
                    msg: 'Wrong Password'
                });
            }
        });
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) =>{
    res.json({user: req.user});
});





 

module.exports = router; 