var Grid = function () {
  this.startNode = null;
  this.endNode = null;
  this.nodes = [];
  this.numCols = 32;
  this.numRows = 32;

  this.init = function (numCols, numRows) {
    if (numCols != undefined){
      this.numCols = numCols;
    }
    if (numRows != undefined) {
      this.numRows = numRows;
    }
    for(var i = 0; i < this.numCols; i++){
      this.nodes[i] = [];
      for(var j = 0; j < this.numRows; j++){
        this.nodes[i][j] = new Node(i, j);
      }
    }
  };

  this.getNode = function (x, y) {
    return this.nodes[x][y];
  };

  this.setStartNode = function(x, y){
    this.startNode = this.nodes[x][y];
  };

  this.setEndNode = function(x, y){
    this.endNode = this.nodes[x][y];
  };

  this.setWalkable = function(x, y, val){
    this.nodes[x][y].walkable = val;
  };

};
