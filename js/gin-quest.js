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

  var canvas = document.getElementById('canvas'), 
      context = canvas.getContext('2d');

  if(!context){
    return;
  }
  
  var center = {x: 0, y: 0},
      currentState = new gridState();
      
  currentState.init();
  this.currentState = currentState;

  window.addEventListener('resize', onR, false);
  function onR () {
    canvas.width = (window.innerWidth < 1024) ? window.innerWidth : 1024;
    canvas.height = (window.innerHeight < 1024) ? window.innerHeight : 1024;
    center.x = canvas.width / 2;
    center.y = canvas.height / 2;
    context.translate(center.x, center.y);
  }
  onR();

  (function onF (){
    window.requestAnimationFrame(onF, canvas);
    context.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
  
    context.fillStyle = "#7cad43";
    context.fillRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
    context.fill();
    
    if (currentState !== null) {
      currentState.render();
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
