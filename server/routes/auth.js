var express = require('express');
var router = express.Router();

router.get('/twitter', 
  passport.authenticate('twitter', {state: 'SOME STATE'}),
  function(req, res) {
});

router.get('/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.get('/logout', function() {
  req.logout();
  res.redirect('/');
}); 

module.exports = router;