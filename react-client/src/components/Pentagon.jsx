import React from 'react';

class Pentagon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: props.stats
    }
  }

  componentDidMount() {
    this.drawPentagon();
  }
  componentWillReceiveProps(newProps) {
    console.log('got props');
    this.setState(newProps, this.drawPentagon);
    console.log(newProps);
    console.log(this.state);
  }

  drawPentagon() {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.translate(200,20);
    var stats = Object.values(this.state.stats);
    console.log('draw penta', stats);
    for (var i = 0; i < 5; i++) {
      var x = Math.cos((18+i*72)/180 * Math.PI) * 200 * stats[i];
      var y = 200 - Math.sin((18+i*72)/180*Math.PI) * 200 * stats[i];
      // console.log('x: ' + x, 'y: ' + y);
      ctx.lineTo(x, y);
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = 'rgba(255, 165, 0, 0.3)';
    ctx.fill();
  }

  render() {
    {console.log(this.drawPentagon)}
    return (<div>
        <canvas id='canvas' width="400" height ="400"></canvas>
    </div>)
  }
}

export default Pentagon;

