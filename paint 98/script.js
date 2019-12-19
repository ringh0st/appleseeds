var x = null;
var y = null;


document.addEventListener('mousedown', onMouseUpdate, false);
document.addEventListener('mouseup', onMouseUpdate, false);
    
function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;

  console.log(x, y);
  console.log(s);
  

}

function getMouseX() {
  return x;
}

function getMouseY() {
  return y;
}