var Gin = function (x, y) {
  //grid x and y
  this.x = (x == undefined) ? 0 : x;
  this.y = (y == undefined) ? 0 : y;
  // graphic center x and y
  this.centerX = this.x * 64 + 32;
  this.centerY = this.y * 64 + 32;
  this.path = [];

  this.render = function (context) {
    context.fillStyle = "#ff3300";
    context.fillRect(this.centerX - 32, this.centerY - 32, 64, 64);
  }
};
