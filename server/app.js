var express = require('express');
var path = require('path');
var db = require('./db');
var passport = require('passport');
var cookieSession = require('cookie-session');
// var session = require('express-session');
// var cookieParser = require('cookie-parser');
var TwitterStrategy = require('passport-twitter').Strategy;

require('dotenv').config();
// routes
var authRoutes = require('./routes/auth');

var app = module.exports.app = exports.app = express();

app.use('/css',express.static(path.join(__dirname, '../app/css')));
app.use('/js',express.static(path.join(__dirname, '../app/js')));
app.use('/bower_components',express.static(path.join(__dirname, '../app/bower_components')));
app.use('/partials',express.static(path.join(__dirname, '../app/partials')));

// PASSPORT STUFF
app.use(cookieSession({
  name: 'session',
  secret: [process.env.SECRET_KEY],
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000
  }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);

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
  callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
}, function(token, tokenSecret, profile, cb) {
  console.log("PROFILE", profile);
  debugger;
  // find or create user in DB
}));

app.get("*", function(req,res){
  res.sendFile(path.join(__dirname, '../app', 'index.html'));
});

var PORT = 3000;

app.listen(PORT, function() {
  console.log("Listening on localhost:", PORT); 
});