var grid = function () {
  this.startNode = null;
  this.endNode = null;
  this.nodes = [];
  this.numCols = 32;
  this.numRows = 32;
  
  this.init = function (nCols, nRows) {
    if (nCols != undefined){
      this.numCols = nCols;
    }
    if (nRows != undefined) {
      this.numRows = nRows;
    }
  };
};
