var Camera = function (x, y) {
  this.x = (x == undefined) ? 0 : x;
  this.y = (y == undefined) ? 0 : y;
  
  // follow a sprite
  this.follow = function (sprite) {
    this.x += (sprite.centerX - this.x) / 12;
    this.y += (sprite.centerY - this.y) / 12;
  };
}
