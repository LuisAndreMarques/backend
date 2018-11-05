var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',function(req,res,next){
  passport.authenticate('local', function(err, user, info) {
    if (err ) {return res.status(501).json(err); }
    if (!user) { return res.status(501).json(info); }
    req.logIn(user, function(err) {
      if (err) { return res.status(501).json(err); }
      return res.status(200).json({message:'Login Success'});
    });
  })(req, res, next);
});

router.post('/register', function (req, res, next) {
  addToDB(req, res);
});

router.get('/dashboard', isValidUser, function(req, res, next){
  return res.status(200).json(req.user);
})

router.get('/logout',isValidUser, function(req,res,next){
  req.logout();
  return res.status(200).json({message:'Logout Success'});
})

function isValidUser(req,res,next){
  if(req.isAuthenticated()) next();
  else return res.status(401).json({message:'Unauthorized Request'});
}

async function addToDB(req, res) {

  var user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    email: req.body.email_address,
    password: User.hashPassword(req.body.password),
    birthdate: req.body.birthdate,
    steam_id: req.body.steam_id,
    level: 0,
    ingame_name: req.body.ingame_name,
    credits: 0,
    premium: false,
    anti_cheat: false,
    anti_cheat_id: '',
    creation_dt: Date.now()
  });

  try {
    doc = await user.save();
    return res.status(201).json(doc);
  } catch (err) {
    return res.status(501).json(err);
  }
}



module.exports = router;