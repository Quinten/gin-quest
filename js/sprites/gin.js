var Gin = function (x, y) {
  //grid x and y
  this.x = (x == undefined) ? 0 : x;
  this.y = (y == undefined) ? 0 : y;
  // graphic center x and y
  this.centerX = this.x * 64 + 32;
  this.centerY = this.y * 64 + 32;
  // walk props
  this.stepFrames = 45; // how many frame it takes to walk one node
  this.stepFramesIndex = 0; // counter for where he is now
  this.path = []; // a path with nodes

  this.render = function (context) {
    this.stepFramesIndex++;
    if (this.stepFramesIndex > this.stepFrames) {
      this.stepFramesIndex = 0;
      if (this.path.length) {
        var nextNode = this.path.shift();
        if ((nextNode.x == this.x) && (nextNode.y == this.y) && (this.path.length)) {
          nextNode = this.path.shift();
        }
        this.x = nextNode.x;
        this.y = nextNode.y;
      }
    }
    this.centerX += ((this.x * 64 + 32) - this.centerX) / 6;
    this.centerY += ((this.y * 64 + 32) - this.centerY) / 6;
    // temp draw a red rect
    context.fillStyle = "#ff3300";
    context.fillRect(this.centerX - 32, this.centerY - 32, 64, 64);
  }

  this.copyPath = function (newPath) {
    this.path = [];
    for (var i = 0; i < newPath.length; i++){
      this.path[i] = newPath[i];
    }
    this.stepFramesIndex = 60;
  }
};
