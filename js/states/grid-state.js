var gridState = function () {

  this.init = function () {
    console.log('grid initialized');
  };
  
  this.render = function (context) {
    //console.log('grid rendering');
    context.save();
    context.translate(-1204, -1024);
    context.beginPath();
    for (var x = 1; x < 32; x++ ) {
      context.moveTo(x * 64, 0);
      context.lineTo(x * 64, 2048);
    }
    for (var y = 1; y < 32; y++ ) {
      context.moveTo(0, y * 64);
      context.lineTo(2048, y * 64);
    }
    context.stroke();
    context.closePath();
    context.restore();
  };
  
  this.destroy = function () {
    console.log('grid destoyed');
  };

};
