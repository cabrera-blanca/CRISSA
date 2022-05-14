//Scroll Up
document.getElementById("up").addEventListener("click",scrollUp);

function scrollUp(){
  var currentScroll = document.documentElement.scrollTop
  
  if (currentScroll > 0 ){
    window.scrollTo (0,0);
  }
}
buttonUp = document.getElementById("up");
window.onscroll = function(){
  scrollnav = document.documentElement.scrollTop;
  header = document.getElementById('header');

  if(scrollnav > 20){
    header.classList.add('nav-mod');
  } 
  else { 
    header.classList.remove('nav-mod');
  }

  var scroll = document.documentElement.scrollTop;

  if(scroll > 600){
    buttonUp.style.transform = "scale(1)";
  }else if (scroll < 600) {
    buttonUp.style.transform = "scale(0)";
  }
}

//Menu barra lateral

document.getElementById('barras').addEventListener("click",mostrarMenu);
document.getElementById('back-menu').addEventListener("click",ocultarMenu)

var nav =document.getElementById('header');
var backgroundMenu =document.getElementById('back-menu');


function mostrarMenu(){
nav.style.right = "0px";
backgroundMenu.style.display ="block";
}

function ocultarMenu(){
  nav.style.right = "-250px";
  backgroundMenu.style.display ="none";
  
}