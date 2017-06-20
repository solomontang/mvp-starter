module.exports.CalculateStats = (recentMatches) => {
  console.log('CALCULATING STATS FOR ' + recentMatches.length + ' MATCHES');
  const stats = {};
  var versitility = new Set();
  recentMatches.forEach( match => {
    stats.fighting = stats.fighting ? stats.fighting += match.hero_damage : match.hero_damage;
    stats.supporting = stats.supporting ? stats.supporting += match.hero_healing : match.hero_healing;
    stats.pushing = stats.pushing ? stats.pushing += match.tower_damage : match.tower_damage;
    stats.farming = stats.farming ? stats.farming += match.last_hits : match.last_hits;
    versitility.add(match.hero_id);
  })

  stats.versitility = versitility.size / 20;
  stats.fighting = ((stats.fighting / 20) / 50000 )> 1 ? 1 : (stats.fighting / 20) / 50000;
  stats.supporting = ((stats.supporting / 20) / 5000) > 1 ? 1 : (stats.supporting / 20) / 5000;
  stats.pushing = ((stats.pushing / 20) / 10000) > 1 ? 1 : (stats.pushing / 20) / 10000;
  stats.farming = ((stats.farming / 20) / 400) > 1 ? 1 : (stats.farming / 20) / 400;

  Object.keys(stats).forEach(key => {
    stats[key] = Number(stats[key].toFixed(2));
  })

  return stats;

}