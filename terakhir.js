
window.setTimeout("waktu()",1000);
function waktu() {
    var waktu = new Date();
    setTimeout("waktu()",1000);
    document.getElementById("jam").innerHTML = waktu.getHours();
    document.getElementById("menit").innerHTML = waktu.getMinutes();
    document.getElementById("detik").innerHTML = waktu.getSeconds();
}


let mybutton = document.getElementById("scroll-Top");

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if ( document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function scrolling() {
  const scrolloptions = {
    top: 0,
    behavior: "smooth"
  };
  window.scrollTo(scrolloptions);
}

mybutton.addEventListener("click", scrollToTop);

