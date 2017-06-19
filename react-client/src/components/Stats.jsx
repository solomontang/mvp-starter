import React from 'react';
import StatItem from './StatItem.jsx';

const Stats = (props) => (
  <div>
    <h4> Stats Component </h4>
    { Object.keys(props.stats).map( (stat, index) => <StatItem value={props.stats[stat]} statName={stat} key={index}/>) }
  </div>
)

export default Stats;