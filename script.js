window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById("nav-list").style.color = "black";
    document.getElementById("join").style.backgroundColor = "white";
    document.getElementById("join").style.color = "#1dbf73";
    document.getElementById("join").style.border = "1px solid #1dbf73";
    
} 
else {
    document.getElementById("header").style.backgroundColor = "#00421a";
    document.getElementById("nav-list").style.color = "white";
    document.getElementById("join").style.backgroundColor = "#00421a";
    document.getElementById("join").style.color = "white";
    document.getElementById("join").style.border = "1px solid white";

  }
}

