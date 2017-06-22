import React from 'react';
import StatItem from './StatItem.jsx';
import Pentagon from './Pentagon.jsx';

const Stats = (props) => (
  <div>
    <h4> Playstyle over most recent 20 matches </h4>
    <Pentagon stats={props.stats} className='canvas'/>
    <div>
      <div className="statNumbers">
        { Object.keys(props.stats).map( (stat, index) => <StatItem value={props.stats[stat]} statName={stat} key={index}/>) }
      </div>
    </div>
  </div>
)

export default Stats;