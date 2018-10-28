// JavaScript Document

/*var modal = deocument.getElementById('modal01');

var img = document.getElementById('myImg01');
var modalImg = document.getElementByID("img01");
var captionText = document.getElementById("caption01");
img.onclick = function(){
	modal.style.display = "block";
	modalIMG.src = this.src;
	captionText.innerHTML = this.alt;
}

var span = document.getElementByClassName("close")[0];

span.onclick = function() {
	modal.style.display = "none";
}*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}
