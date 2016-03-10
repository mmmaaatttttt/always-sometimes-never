var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/twitter', 
  passport.authenticate('twitter', {state: 'SOME STATE'}));

router.get('/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.get('/logout', function() {
  req.logout();
  res.redirect('/');
}); 

module.exports = router;