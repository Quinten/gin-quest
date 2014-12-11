var Node = function (x, y) {
  this.x = (x == undefined) ? 0 : x;
  this.y = (y == undefined) ? 0 : y;
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.walkable = true;
  parent = null;
  this.costMultiplier = 1;
}
