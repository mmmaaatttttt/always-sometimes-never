var express = require('express');
var path = require('path');

var app = module.exports.app = exports.app = express();
app.use('/css',express.static(path.join(__dirname, '../app/css')));
app.use('/css',express.static(path.join(__dirname, '../app/css')));
app.use('/js',express.static(path.join(__dirname, '../app/js')));
app.use('/bower_components',express.static(path.join(__dirname, '../app/bower_components')));
app.use('/partials',express.static(path.join(__dirname, '../app/partials')));

app.get("*", function(req,res){
  res.sendFile(path.join(__dirname, '../app', 'index.html'));
});

var PORT = 3000;

app.listen(PORT, function() {
  console.log("Listening on localhost:", PORT); 
});