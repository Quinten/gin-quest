var Pim = function (x, y) {
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
  // spritesheet stuff
  this.spritesheet = ngn.getSpritesheetByName('Pim');
  this.walking = [0,2,0,3];
  this.resting = [0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1];
  this.animation = this.resting;
  this.animationIndex = 0;
  this.animationFPS = 8; // frames per second
  this.animationTimer = 0;

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
        this.animation = this.walking;
      } else {
        this.animation = this.resting;
      }
    }
    this.centerX += ((this.x * 64 + 32) - this.centerX) / 12;
    this.centerY += ((this.y * 64 + 32) - this.centerY) / 12;
    // temp draw a red rect
    //context.fillStyle = "#ff3300";
    //context.fillRect(this.centerX - 32, this.centerY - 32, 64, 64);
    // spritesheet animation
    this.animationTimer += ngn.elapsed;
    if (this.animationTimer > (1000 / this.animationFPS)){
      this.animationTimer = this.animationTimer % (1000 / this.animationFPS);
      // we need to tick a frame here
      this.animationIndex++;
      if (this.animationIndex >= this.animation.length){
        this.animationIndex = 0;
      }
    }
    context.drawImage(this.spritesheet.img, this.animation[this.animationIndex] * 128, 0, 128, 128, Math.floor(this.centerX - 64), Math.floor(this.centerY - 96), 128, 128);
  };

  this.copyPath = function (newPath) {
    this.path = [];
    for (var i = 0; i < newPath.length; i++){
      this.path[i] = newPath[i];
    }
    this.stepFramesIndex = 60;
  };

  this.destroy = function () {
    this.spritesheet = null;
  };
};
