var express = require('express');
var path = require('path');
var db = require('./db');
var passport = require('passport');
var cookieSession = require('cookie-session');
var TwitterStrategy = require('passport-twitter').Strategy;

require('dotenv').config();
// routes
var authRoutes = require('./routes/auth');

var app = module.exports.app = exports.app = express();

app.use('/css',express.static(path.join(__dirname, '../app/css')));
app.use('/js',express.static(path.join(__dirname, '../app/js')));
app.use('/bower_components',express.static(path.join(__dirname, '../app/bower_components')));
app.use('/partials',express.static(path.join(__dirname, '../app/partials')));
app.use('/auth', authRoutes);

// PASSPORT STUFF
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SECRET_KEY]
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  //TODO
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  // TODO
  done(null, obj);
});

// TWITTER STUFF
passport.use(new TwitterStrategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: "http://localhost:3000/auth/twitter/callback"
}, function(token, tokenSecret, profile, cb) {
  console.log(profile);
  // find or create user in DB
}));

app.get("*", function(req,res){
  res.sendFile(path.join(__dirname, '../app', 'index.html'));
});

var PORT = 3000;

app.listen(PORT, function() {
  console.log("Listening on localhost:", PORT); 
});