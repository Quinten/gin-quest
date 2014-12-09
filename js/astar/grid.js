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
  };
};
