var GridState = function () {
  
  this.grid = null;
  this.offset = {x: -1024, y: -1024};

  this.init = function () {
    this.grid = new Grid();
    this.grid.init(32,32);
    //this.grid.setWalkable(16,16, false);
  };
  
  this.render = function (context) {
    //console.log('grid rendering');
    context.save();
    context.translate(this.offset.x, this.offset.y);
    context.beginPath();
    for (var x = 1; x < 32; x++ ) {
      context.moveTo(x * 64, 0);
      context.lineTo(x * 64, 2048);
    }
    for (var y = 1; y < 32; y++ ) {
      context.moveTo(0, y * 64);
      context.lineTo(2048, y * 64);
    }
    context.strokeStyle = "#669900";
    context.stroke();
    context.closePath();
    
    context.fillStyle = "#669900";
    for(var i = 0; i < this.grid.numCols; i++){
      for(var j = 0; j < this.grid.numRows; j++){
        if (!this.grid.nodes[i][j].walkable) {
          context.fillRect(i * 64, j * 64, 64, 64);          
        }
      }
    }
    
    // man
    //context.fillStyle = "#ff3300";
    //context.fillRect(1024-32, 1024-32, 64, 64);
    //context.restore();
  };
  
  this.processClick = function (x , y) {
    var localX = x - this.offset.x;
    var localY = y - this.offset.y;
    console.log("localX:" + localX + " localY:" + localY);
    var gridX = Math.floor(localX / 64);
    var gridY = Math.floor(localY / 64);
    console.log("gridX:" + gridX + " gridY:" + gridY);
    console.log(this.grid.getWalkable(gridX, gridY));
    this.grid.setWalkable(gridX, gridY, !this.grid.getWalkable(gridX, gridY));
  }
  
  this.destroy = function () {
    console.log('grid destoyed');
  };

};
