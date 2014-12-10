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
  
  var center = {x: 0, y: 0};
  
  this.currentState = new GridState();
  this.currentState.init();

  window.addEventListener('resize', onR, false);
  function onR () {
    canvas.width = (window.innerWidth < 1024) ? window.innerWidth : 1024;
    canvas.height = (window.innerHeight < 1024) ? window.innerHeight : 1024;
    center.x = canvas.width / 2;
    center.y = canvas.height / 2;
    context.translate(center.x, center.y);
  }
  onR();
  
  this.onclick = function (e) {
    var x, y;
    if (e.pageX || e.pageY) {
      x = e.pageX;
      y = e.pageY;
    } else {
      x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
    console.log("click x:" + x + " y:" + y);
  };
  canvas.addEventListener('click', this.onclick, false);

  (function onF (){
    window.requestAnimationFrame(onF, canvas);
    context.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
  
    context.fillStyle = "#99cc00";
    context.fillRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
    
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
