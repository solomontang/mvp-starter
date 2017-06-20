import React from 'react';

const StatItem = (props) => (
  <div>
    { props.statName + ': ' + props.value }
  </div>
)

export default StatItem;