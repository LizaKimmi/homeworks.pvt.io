"use strict" 

var images = document.getElementsByTagName("img");
for (var i = images.length - 1; i>=0; --i){
  var image = images[i];
  var posY = image.offsetTop;
  var posX = image.offsetLeft;
  image.style.position = "absolute";
  image.style.top = posY + "px";
  image.style.left = posX + "px";
};

onmousedown = function(EO) {
  EO=EO||window.event;
  image = EO.target; 

  let shiftX = EO.clientX - image.getBoundingClientRect().left;
  let shiftY = EO.clientY - image.getBoundingClientRect().top;

  document.body.appendChild(image);
  moveAt(EO.pageX, EO.pageY);

  function moveAt(pageX, pageY) {
    image.style.left = pageX - shiftX + "px";
    image.style.top = pageY - shiftY + "px";
  };

  document.onmousemove = function(EO) {
    moveAt(EO.pageX, EO.pageY);
  };

  image.onmouseup = function () {
    document.onmousemove = null;
    image.onmouseup = null;
  };

  image.ondragstart = function() {
  return false;
  };

};

