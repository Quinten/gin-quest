var LoadState = function () {

  this.init = function () {
    // load all images in spritelibrary
    var nLoaded = 0;
    //console.log(ngn.spritelibrary.length);
    for (var i = 0; i < ngn.spritelibrary.length; i++){
      ngn.spritelibrary[i].img = new Image();
      (function(){
      var libIndex = i;
      ngn.spritelibrary[i].img.onload = function (e) {
        //console.log(this.src + ' loaded!');
        ngn.spritelibrary[libIndex].img = resizeImg(ngn.spritelibrary[libIndex].img, 4);
        nLoaded++;
        if (nLoaded === ngn.spritelibrary.length) {
          // all images  have loaded
          var oldState = ngn.currentState;
          ngn.currentState = new ParcState();
          ngn.currentState.init();
          oldState.destroy();
        }
      };})();
      ngn.spritelibrary[i].img.src = ngn.spritelibrary[i].path;
    }
  };
  
  this.render = function (context) {
    context.save();

    // draw something so we know we are in the loading state
    context.fillStyle = "#6699cc";
    context.fillRect(-32, -32, 64, 64);
    
    context.restore();
  };
  
  this.processClick = function (x , y) {
    //console.log('Do nothing, we are loading.');
    return;
  };
  
  this.destroy = function () {
    //console.log('LoadState destoyed');
  };

};
