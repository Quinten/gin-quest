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

  var canvas = document.getElementById('canvas'), context = canvas.getContext('2d');

  if(!context){
    return;
  }

  window.addEventListener('resize', onR, false);
  onR();
  function onR () {
    canvas.width = (window.innerWidth < 1024) ? window.innerWidth : 1024;
    canvas.height = (window.innerHeight < 1024) ? window.innerHeight : 1024;
  }

  (function onF (){
    window.requestAnimationFrame(onF, canvas);
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    context.fillStyle = "#7cad43";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fill();
  }());
      
};
    
if(document.readyState === 'complete'){
  ngn.setup();
} else {
  window.onload = function (){
    ngn.setup();
  };
}
