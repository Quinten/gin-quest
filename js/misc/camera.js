var Camera = function (x, y) {
  this.x = (x == undefined) ? 0 : x;
  this.y = (y == undefined) ? 0 : y;
  
  // follow a sprite
  this.follow = function (sprite) {
    this.x += (sprite.centerX - this.x) / 12;
    this.y += (sprite.centerY - this.y) / 12;
  };

  this.frame = function (minX, minY, maxX, maxY) {
    this.x = Math.max(Math.min(this.x, maxX), minX);
    this.y = Math.max(Math.min(this.y, maxY), minY);
  };
}
