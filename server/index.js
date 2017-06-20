var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var queryString = require('query-string');


// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var stats = require('../database-mongo/index.js');
var utils = require('../database-mongo/utils.js');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/stats', function (req, res) {

  // Stats.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data.stats);
  //   }
  // });
  // console.log(req.body);
  res.sendStatus(200);
});

app.post('/stats', function (req, res) {
  console.log(req.body);
  var params = {
    q: req.body.name,
    similarity: 1
  }
  qStr = queryString.stringify(params);

  request('https://api.opendota.com/api/search?' + qStr, function( err, player) {
    var body = JSON.parse(player.body);
    var accId = body[0].account_id;
    var alias = body[0].personaname;

    request(`https://api.opendota.com/api/players/${accId}/recentMatches`, function (err, recentMatches) {
      recentMatches = JSON.parse(recentMatches.body);
      // console.log(recentMatches);
      utils.CalculateStats(recentMatches);
      var newPlayer = {
        username: alias,
        steamId: accId,
        stats: recentMatches
      };

      var options = {
        new: true,
        upsert: true
      };
      stats.findOneAndUpdate({username: alias}, newPlayer, options, function (err, docs) {
        if (err) {
          res.sendStatus(500);
        } else {
          res.send(docs);
        }
      });
    });
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

