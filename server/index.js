var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var db = require('../database-mongo/index.js');

var Stats = new db({
  username: 'santaslilhe1pe12',
  steamID: 1,
  stats: {
    fighting: 0,
    versitility: 0,
    supporting: 0,
    farming: 0,
    pushing: 0
  }
});

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {
  Stats.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data.stats);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

