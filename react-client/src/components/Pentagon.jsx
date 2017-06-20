import React from 'react';

class Pentagon extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.drawPentagon();
  }

  drawPentagon() {
    console.log('draw');
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    // console.log(Math.sin(72/180 * Math.PI) * 200 + 200));
    // console.log(200 - Math.cos(72/180 * Math.PI) * 200));
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(200,0);
    ctx.lineTo(Math.sin(18/180 * Math.PI) * 200 + 200, 200 + Math.cos(18/180 * Math.PI) * 200);
    ctx.fill();
    // // ctx.lineTo(Math.cos(72/180 * Math.PI)*200, Math.sin(72/180 * Math.PI)*200);
    // ctx.lineTo(400,400);
    // ctx.fill();
    // ctx.fillRect(25, 25, 100, 100);
    // ctx.clearRect(45, 45, 60, 60);
    // ctx.strokeRect(50, 50, 50, 50);
  }

  render() {
    return (<div>
        <canvas id='canvas'></canvas>
    </div>)
  }
}

export default Pentagon;

