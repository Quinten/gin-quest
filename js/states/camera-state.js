var CameraState = function () {

var map = [
1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,
1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,
1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,
1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,
1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,
0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,
0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,
1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,
1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,
1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,
1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,
1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,
1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,
0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,
0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,
0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,
0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,
0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,
0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,
0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,
0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,
0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,
0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0
];

  this.grid = null;
  this.offset = {x: -1024, y: -1024};
  this.finder = null;
  this.gin = null;

  this.init = function () {
    this.gin = new Gin(16,16);
    this.grid = new Grid();
    this.grid.init(32,32);
    this.grid.setStartNode(16,16);
    this.grid.setEndNode(16,16);
    var i = 0;
    for(var y = 0; y < this.grid.numRows; y++){
      for(var x = 0; x < this.grid.numCols; x++){
        if (map[i] === 1) {
          console.log("unw" + x + ":" + y);
          this.grid.setWalkable(x, y, false);
        }
        i++;
      }
    }
    this.finder = new AStar();
  };
  
  this.render = function (context) {
    //console.log('grid rendering');
    context.save();
    context.translate(this.offset.x, this.offset.y);
    
    // draw a bg grid
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
    
    // fill unwalkable nodes
    context.fillStyle = "#999999";
    for(var i = 0; i < this.grid.numCols; i++){
      for(var j = 0; j < this.grid.numRows; j++){
        if (!this.grid.getWalkable(i, j)) {
          context.fillRect(i * 64, j * 64, 64, 64);
        }
      }
    }
    
    // fill path
    if (this.finder.path.length) {
      context.fillStyle = "#669900";
      for(var p = 0; p < this.finder.path.length; p++){
          context.fillRect(this.finder.path[p].x * 64, this.finder.path[p].y * 64, 64, 64);
      }      
    }
    
    // fill startNode
    //context.fillStyle = "#ff3300";
    //context.fillRect(this.grid.startNode.x * 64, this.grid.startNode.y * 64, 64, 64);
    
    // fill endNode
    //context.fillStyle = "#6699cc";
    //context.fillRect(this.grid.endNode.x * 64, this.grid.endNode.y * 64, 64, 64);
    
    // render gin sprite
    this.gin.render(context);
    context.restore();
  };
  
  this.processClick = function (x , y) {
    var localX = x - this.offset.x;
    var localY = y - this.offset.y;
    //console.log("localX:" + localX + " localY:" + localY);
    var gridX = Math.floor(localX / 64);
    var gridY = Math.floor(localY / 64);
    //console.log("gridX:" + gridX + " gridY:" + gridY);
    //console.log(this.grid.getWalkable(gridX, gridY));
    //this.grid.setWalkable(gridX, gridY, !this.grid.getWalkable(gridX, gridY));
    if (this.grid.getWalkable(gridX, gridY)) {
      this.grid.setStartNode(this.grid.endNode.x, this.grid.endNode.y);
      this.grid.setEndNode(gridX, gridY);
      this.finder.findPath(this.grid);
    }
  }
  
  this.destroy = function () {
    console.log('camera destoyed');
  };

};
