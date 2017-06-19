var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var db = require('../database-mongo/index.js');

// var Stats = new db({
//   username: 'santaslilhe1pe12',
//   steamID: 1,
//   stats: {
//     fighting: 0,
//     versitility: 0,
//     supporting: 0,
//     farming: 0,
//     pushing: 0
//   }
// }, {collection: 'PlayerStat'});

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
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

