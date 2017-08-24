console.log('Loaded!');

//move the image
var img = document.getElementById("madi");

function moveRight(){
  var marginLeft=0;
  marginLeft= marginLeft +10;
  img.style.marginLeft = marginleft + 'px';
}

img.onclick = function(){
  var interval = setInterval(moveRight,100);
};