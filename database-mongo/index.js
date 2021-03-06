var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dota');
var Schema = mongoose.Schema;

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var StatsSchema = mongoose.Schema({
  username: String,
  steamId: {type: Number, unique: true},
  stats: Schema.Types.Mixed,
  friends: []
});

var Stat = mongoose.model('PlayerStat', StatsSchema);

// var selectAll = function(callback) {
//   Stat.find({}, function(err, stats) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, stats);
//     }
//   });
// };

module.exports = Stat;
// module.exports.selectAll = selectAll;
