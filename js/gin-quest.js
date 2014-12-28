/* this will be our core engine  */

var ngn = {};
ngn.setup = function () {
  if (!window.innerWidth) {
    setTimeout(ngn.setup, 500);
    return;
  }
  
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
                                    window.mozRequestAnimationFrame ||
                                    window.msRequestAnimationFrame ||
                                    window.oRequestAnimationFrame ||
                                    function (callback) {
                                      return window.setTimeout(callback, 17);
                                    });
  }

  ngn.canvas = document.getElementById('canvas'); 
  var context = ngn.canvas.getContext('2d');

  if(!context){
    return;
  }
  
  var center = {x: 0, y: 0};
  
  this.currentState = new CameraState();
  this.currentState.init();

  window.addEventListener('resize', onR, false);
  function onR () {
    ngn.canvas.width = (window.innerWidth < 1024) ? window.innerWidth : 1024;
    ngn.canvas.height = (window.innerHeight < 1024) ? window.innerHeight : 1024;
    center.x = ngn.canvas.width / 2;
    center.y = ngn.canvas.height / 2;
    context.translate(center.x, center.y);
  }
  onR();
  
  function onC (e) {
    var x, y;
    if (e.pageX || e.pageY) {
      x = e.pageX;
      y = e.pageY;
    } else {
      x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    x -= ngn.canvas.offsetLeft;
    y -= ngn.canvas.offsetTop;
    x -= ngn.canvas.width / 2;
    y -= ngn.canvas.height / 2;
    //console.log("canvas x:" + x + " y:" + y);
    ngn.currentState.processClick(x, y);
  };
  ngn.canvas.addEventListener('click', onC, false);

  (function onF (){
    window.requestAnimationFrame(onF, ngn.canvas);
    context.clearRect(-ngn.canvas.width/2, -ngn.canvas.height/2, ngn.canvas.width, ngn.canvas.height);
  
    context.fillStyle = "#99cc00";
    context.fillRect(-ngn.canvas.width/2, -ngn.canvas.height/2, ngn.canvas.width, ngn.canvas.height);
    
    if (ngn.currentState !== null) {
      ngn.currentState.render(context);
    }
  }());
      
};
    
if(document.readyState === 'complete'){
  ngn.setup();
} else {
  window.onload = function (){
    ngn.setup();
  };
}
