import React from 'react';

class Pentagon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: props.stats
    }
  }

  componentDidMount() {
    this.renderGraph();
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps, () => {
      this.renderGraph();
    });
  }

  renderGraph() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.drawPentagon([1, 1, 1, 1, 1], 'rgba(255, 255, 255, 0.2)', true);
    this.drawPentagon([0.5, 0.5, 0.5, 0.5, 0.5], 'rgba(168, 25, 25, 0.1)', false)

    var playerStats = [
      this.state.stats.farming,
      this.state.stats.fighting,
      this.state.stats.versitility,
      this.state.stats.pushing,
      this.state.stats.supporting
    ];

    this.drawPentagon(playerStats,'rgba(255, 165, 0, 0.3)')
  }

  drawPentagon(playerStats,
              color = 'rgba(255, 255, 255, 0.2)',
              fill = true) {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.translate(200,20);
    
    // console.log('draw penta', playerStats);
    for (var i = 0; i < 5; i++) {
      var x = Math.cos((18+i*72)/180 * Math.PI) * 200 * playerStats[i];
      var y = 200 - Math.sin((18+i*72)/180*Math.PI) * 200 * playerStats[i];
      // console.log('x: ' + x, 'y: ' + y);
      ctx.lineTo(x, y);
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = color;
    ctx.closePath();
    fill ? ctx.fill() : ctx.stroke();
  }

  render() {
    return (<div>
        <canvas id='canvas' width="400" height ="400"></canvas>
    </div>)
  }
}

export default Pentagon;

