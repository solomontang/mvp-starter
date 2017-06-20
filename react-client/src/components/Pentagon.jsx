import React from 'react';

class Pentagon extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.drawPentagon();
  }

  drawPentagon() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    // console.log(Math.sin(72/180 * Math.PI) * 200 + 200));
    // console.log(200 - Math.cos(72/180 * Math.PI) * 200));
    ctx.beginPath();
    ctx.translate(200,20);
    var stats = [1,1,1,1,1];
    for (var i = 0; i < 5; i++) {
      // console.log((18+i*72));
      var x = Math.cos((18+i*72)/180 * Math.PI) * 200 * stats[i];
      var y = 200 - Math.sin((18+i*72)/180*Math.PI) * 200 * stats[i];
      console.log('x: ' + x, 'y: ' + y);
      ctx.lineTo(x, y);
    }
    ctx.fillStyle = 'rgba(255, 165, 0, 0.5)';
    ctx.fill();


    // // ctx.lineTo(Math.cos(72/180 * Math.PI)*200, Math.sin(72/180 * Math.PI)*200);
    // ctx.lineTo(400,400);
    // ctx.fill();
  }

  render() {
    return (<div>
        <canvas id='canvas' width="400" height ="400"></canvas>
    </div>)
  }
}

export default Pentagon;

