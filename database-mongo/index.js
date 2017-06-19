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

var StatsSchema = new Schema({
  username: String,
  steamId: {type: Number, unique: true},
  stats: Schema.Types.Mixed
});

StatsSchema.methods.selectAll = function(cb) {
  return this.model('Stat').find({ }, cb);
};

var Stat = mongoose.model('Stat', StatsSchema);



// var selectAll = function(callback) {
//   Stat.find({}, function(err, stats) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, stats);
//     }
//   });
// };

// module.exports.selectAll = selectAll;
module.exports = mongoose.model('Stat');