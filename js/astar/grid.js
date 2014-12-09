var grid = function () {
  this.startNode = null;
  this.endNode = null;
  this.nodes = [];
  this.numCols = 32;
  this.numRows = 32;
  
  this.init = function (nCols = 32, nRows = 32) {
    this.numCols = nCols;
    this.numRows = nRows;
  };
};
