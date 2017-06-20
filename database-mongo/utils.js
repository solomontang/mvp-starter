module.exports.CalculateStats = (recentMatches) => {
  var matches = recentMatches.length;
  console.log('CALCULATING STATS FOR ' + matches + ' MATCHES');
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
  stats.fighting = ((stats.fighting / 20) / 50000 )> 1 ? 1 : (stats.fighting / matches) / 50000;
  stats.supporting = ((stats.supporting / 20) / 2000) > 1 ? 1 : (stats.supporting / matches) / 2000;
  stats.pushing = ((stats.pushing / 20) / 7500) > 1 ? 1 : (stats.pushing / matches) / 7500;
  stats.farming = ((stats.farming / 20) / 400) > 1 ? 1 : (stats.farming / matches) / 400;

  Object.keys(stats).forEach(key => {
    stats[key] = Number(stats[key].toFixed(2));
  })

  return stats;
}