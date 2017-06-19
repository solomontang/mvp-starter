var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dota');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var StatsSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

var Stat = mongoose.model('Stat', StatsSchema);

var selectAll = function(callback) {
  Stat.find({}, function(err, stats) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, stats);
    }
  });
};

module.exports.selectAll = selectAll;