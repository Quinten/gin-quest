var AStar = function () {

  this.open = [];
  this.closed = [];
  this.grid = null;
  this.endNode = null;
  this.startNode = null;
  this.path = null;
  this.heuristic = this.manhattan;
  //this.heuristic = this.euclidian;
  //this.heuristic = this.diagonal;
  this.straightCost = 1;
  this.diagCost = Math.SQRT2;

  this.findPath = function (grid) {
    this.grid = grid;
    this.open = [];
    this.closed = [];

    this.startNode = this.grid.startNode;
    this.endNode = this.grid.endNode;

    this.startNode.g = 0;
    this.startNode.h = this.heuristic(this.startNode);
    this.startNode.f = this.startNode.g + this.startNode.h;

    return this.search();
  };

  this.search = function ()	{
    var node = this.startNode;
    while (node != this.endNode) {
      var startX = Math.max(0, node.x - 1);
      var endX = Math.min(this.grid.numCols - 1, node.x + 1);
      var startY = Math.max(0, node.y - 1);
      var endY = Math.min(this.grid.numRows - 1, node.y + 1);

      for (var i = startX; i <= endX; i++) {
        for (var j = startY; j <= endY; j++) {
          var test = this.grid.getNode(i, j);
          if (test == node || !test.walkable || !this.grid.getNode(node.x, test.y).walkable || !this.grid.getNode(test.x, node.y).walkable) {
            continue;
          }

          var cost = this.straightCost;
          if (!((node.x == test.x) || (node.y == test.y))) {
            cost = this.diagCost;
          }
          var g = node.g + cost * test.costMultiplier;
          var h = this.heuristic(test);
          var f = g + h;
          if (this.isOpen(test) || this.isClosed(test)) {
            if (test.f > f) {
              test.f = f;
              test.g = g;
              test.h = h;
              test.parent = node;
            }
          } else {
            test.f = f;
            test.g = g;
            test.h = h;
            test.parent = node;
						this.open.push(test);
          }
        }
      }
      this.closed.push(node);
      if (this.open.length == 0) {
        console.log("no path found");
        return false;
      }
      //_open.sortOn("f", Array.NUMERIC);
      this.open.sort(function (a, b){ return a.f - b.f; });
      node = this.open.shift();
    }
		this.buildPath();
		return true;
  };
//...
	private function buildPath():void
	{
		_path = new Array();
		var node:Node = _endNode;
		_path.push(node);
		while(node != _startNode)
		{
			node = node.parent;
			_path.unshift(node);
		}
	}
	
	public function get path():Array
	{
		return _path;
	}
	
	private function isOpen(node:Node):Boolean
	{
		for(var i:int = 0; i < _open.length; i++)
		{
			if(_open[i] == node)
			{
				return true;
			}
		}
		return false;
	}
	
	private function isClosed(node:Node):Boolean
	{
		for(var i:int = 0; i < _closed.length; i++)
		{
			if(_closed[i] == node)
			{
				return true;
			}
		}
		return false;
	}
	
	private function manhattan(node:Node):Number
	{
		return Math.abs(node.x - _endNode.x) * _straightCost + Math.abs(node.y + _endNode.y) * _straightCost;
	}
	
	private function euclidian(node:Node):Number
	{
		var dx:Number = node.x - _endNode.x;
		var dy:Number = node.y - _endNode.y;
		return Math.sqrt(dx * dx + dy * dy) * _straightCost;
	}
	
	private function diagonal(node:Node):Number
	{
		var dx:Number = Math.abs(node.x - _endNode.x);
		var dy:Number = Math.abs(node.y - _endNode.y);
		var diag:Number = Math.min(dx, dy);
		var straight:Number = dx + dy;
		return _diagCost * diag + _straightCost * (straight - 2 * diag);
	}
	
	public function get visited():Array
	{
		return _closed.concat(_open);
	}
}
