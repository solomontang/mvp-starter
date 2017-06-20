module.exports.CalculateStats = (recentMatches) => {
  console.log('CALCULATING STATS FOR ' + recentMatches.length + ' MATCHES');
  const stats = {};
  recentMatches.forEach( match => {
    stats.fighting += match.hero_damage;
    stats.supporting += match.hero_healing;
    stats.pushing += match.tower_damage;
    stats.farming += match.last_hits;
    stats.versitility = 0;
  })

}