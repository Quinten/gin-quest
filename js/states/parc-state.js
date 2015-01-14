var ParcState = function () {

var map = [
1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,
1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,
1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,
1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,
1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,
1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,
1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,
1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,
1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,
1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,
1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,
1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,
1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,
1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,
1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,
1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,
1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,
1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,
1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,
1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,
1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,
1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,
1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,
1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,
1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1
];

  this.grid = null;
  this.finder = null;
  this.gin = null;
  this.camera = null;

  this.init = function () {
    this.camera = new Camera(24 * 64 + 32, 31 * 64 + 32);
    this.gin = new Pim(24,31);
    this.grid = new Grid();
    this.grid.init(32,32);
    this.grid.setStartNode(16,16);
    this.grid.setEndNode(16,16);
    var i = 0;
    for(var y = 0; y < this.grid.numRows; y++){
      for(var x = 0; x < this.grid.numCols; x++){
        if (map[i] === 1) {
          this.grid.setWalkable(x, y, false);
        }
        i++;
      }
    }
    this.finder = new AStar();
    this.mapToImg(16);
  };
  
  this.render = function (context) {
    //console.log('grid rendering');
    context.save();
    this.camera.follow(this.gin);
    this.camera.frame((ngn.canvas.width/2), (ngn.canvas.height/2), (2048 - ngn.canvas.width/2), (2048 - ngn.canvas.height/2));
    context.translate( - Math.floor(this.camera.x), - Math.floor(this.camera.y));
    
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

    // render gin sprite
    this.gin.render(context);
    context.restore();
  };
  
  this.processClick = function (x , y) {
    var localX = x + this.camera.x;
    var localY = y + this.camera.y;
    if ((localX < 0) || (localX > 2048) || (localY < 0) || (localY > 2048)){
      return;
    }

    var gridX = Math.floor(localX / 64);
    var gridY = Math.floor(localY / 64);

    if (this.grid.getWalkable(gridX, gridY)) {
      this.grid.setStartNode(this.gin.x, this.gin.y);
      this.grid.setEndNode(gridX, gridY);
      if (this.finder.findPath(this.grid)){
        this.gin.animationIndex = 0;
        this.gin.copyPath(this.finder.path);
      }
    }
  }
  
  this.destroy = function () {
    this.gin.destroy();
    console.log('ParcState destoyed');
  };

  this.mapToImg = function (tileSize) {
    var imgCanvas = document.createElement("canvas");
    imgCanvas.width = 32 * tileSize;
    imgCanvas.height = 32 * tileSize;
    var imgContext = imgCanvas.getContext("2d");
    imgContext.fillStyle = "#99cc00";
    imgContext.fillRect(0, 0, 32 * tileSize, 32 * tileSize);
    // fill unwalkable nodes
    imgContext.fillStyle = "#669900";
    for(var i = 0; i < this.grid.numCols; i++){
      for(var j = 0; j < this.grid.numRows; j++){
        if (!this.grid.getWalkable(i, j)) {
          imgContext.fillRect(i * tileSize, j * tileSize, tileSize, tileSize);
        }
      }
    }
    window.location = imgCanvas.toDataURL();
  };

};
