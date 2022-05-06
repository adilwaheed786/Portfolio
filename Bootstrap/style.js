
var mybutton = document.getElementById("Btn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var colors1=document.getElementById("ch1")
  var colors2=document.getElementById("ch2")
  var colors3=document.getElementById("ch3")
  var ft1=document.getElementById("ft1")
  var ft2=document.getElementById("ft2")
  colors1.classList.toggle("changed");
  colors2.classList.toggle("changed");
  colors3.classList.toggle("changed");
  ft1.classList.toggle("foot1");
  ft2.classList.toggle("foot2");
  var dark=document.getElementsByClassName("fa-circle-half-stroke")
  dark[0].classList.toggle("fa-lightbulb")
  // var btn=document.getElementsByClassName("fa-moon")
  // btn[0].classList.toggle("fa-lightbulb-on");

  // var clicked = false;
  // var btn=document.getElementsByClassName("fa-solid fa-moon")
  // if (clicked) {
  //   btn[0].classList.remove("fa-moon");
  //   btn[0].classList.add("fa-circle-half-stroke");
  //   clicked = false;
  // } else {
  //   btn[0].classList.remove("fa-circle-half-stroke");
  //   btn[0].classList.add("fa-moon");
  //   clicked = true;
  // }
}
var header = document.getElementsByClassName("child");
var list = header[0].getElementsByClassName("hide");
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
var header = document.getElementById("mySidenav");
var list = header.getElementsByClassName("hide");
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("acti");
  current[0].className = current[0].className.replace(" acti", "");
  this.className += " acti";
  });
}
function openNav() {
  var element = document.getElementById("mySidenav");
  element.classList.toggle("width10");
  var tog=document.getElementById("togle");
  tog.getElementsByTagName('a')[0].getElementsByClassName("fa-bars")[0].classList.toggle("fa-xmark")
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// tog.getElementsByTagName('a')[0].getElementsByClassName("fa-bars")[0].classList.toggle("fa-xmark")
// function myFunction(x) {
//   // x.classList.toggle("fa-xmark");
//   tog.getElementsByTagName('a')[0].getElementsByClassName("fa-bars")[0].classList.toggle("fa-xmark")
// }