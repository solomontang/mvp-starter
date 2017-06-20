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

    ctx.font = "15px Verdana";
    ctx.translate(250,70);
    ctx.fillStyle = 'rgba(200, 200, 200, 0.9)';
    ctx.fillText('Farming', 180, 125);
    ctx.fillText('Fighting', -30, -10);
    ctx.fillText('Versitility', -250, 125);
    ctx.fillText('Pushing', -180, 375);
    ctx.fillText('Supporting', 120, 375);
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    ctx.translate(250,270)
    for (let j = 0; j < 5; j++) {

      var x = Math.cos((18+j*72)/180 * Math.PI) * 200;
      var y = -Math.sin((18+j*72)/180 * Math.PI) * 200;
      ctx.beginPath();
      ctx.setLineDash([5, 15]);
      ctx.moveTo(0,0);
      ctx.lineTo(x,y);
      ctx.closePath();
      ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
      ctx.stroke();
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    

    //background
    this.drawPentagon([1, 1, 1, 1, 1], 'rgba(255, 255, 255, 0.2)', true);
    //50% mark
    this.drawPentagon([0.5, 0.5, 0.5, 0.5, 0.5], 'rgba(0, 0, 0, .8)', false)
    this.drawPentagon([.05, .05, .05, .05, .05], 'rgba(0, 0, 0, 1)', false);

    var playerStats = [
      this.state.stats.farming,
      this.state.stats.fighting,
      this.state.stats.versitility,
      this.state.stats.pushing,
      this.state.stats.supporting
    ];

    //player stats
    this.drawPentagon(playerStats,'rgba(255, 165, 0, 0.3)');
    this.drawPentagon(playerStats,'rgba(255, 165, 0, 1)',false)
  }

  drawPentagon(playerStats,
              color = 'rgba(255, 255, 255, 0.2)',
              fill = true) {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.translate(250,270);
    
    // console.log('draw penta', playerStats);
    for (var i = 0; i < 5; i++) {
      var x = Math.cos((18+i*72)/180 * Math.PI) * 200 * playerStats[i];
      var y = -Math.sin((18+i*72)/180*Math.PI) * 200 * playerStats[i];
      // console.log('x: ' + x, 'y: ' + y);
      ctx.lineTo(x, y);
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    
    ctx.closePath();
    if(fill) {
      ctx.fillStyle = color;
      ctx.fill();
    } else {
      ctx.strokeStyle = color;
      ctx.stroke();
    }
  }

  render() {
    return (<div className="canvas">
        <canvas id='background' width="500" height="500"></canvas>
        <canvas id='canvas' width="500" height ="500"></canvas>
    </div>)
  }
}

export default Pentagon;

