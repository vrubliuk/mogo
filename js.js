//HIDE HEADER IF WINDOW IS SMALL
window.addEventListener("resize", function () {
  // var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  // if (h <= 400) {
  //   document.getElementById("footer").style.display = "none";
  //   document.getElementById("header").style.display = "none";
  // } else {
  //   document.getElementById("footer").removeAttribute("style");
  //   document.getElementById("header").removeAttribute("style");
  // }
  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (w <= 820) {
    document.getElementsByClassName("menuItem")[0].style.display = "none";
    document.getElementsByClassName("menuItem")[1].style.display = "none";
    document.getElementsByClassName("menuItem")[2].style.display = "none";
    document.getElementsByClassName("menuItem")[3].style.display = "none";
    document.getElementsByClassName("menuItem")[4].style.display = "none";
     document.getElementsByClassName("menuItem")[5].style.marginRight = "20px";
    document.getElementById("logo").style.left = "0";
    document.getElementById("logo").style.right = "0";
    document.getElementById("menuIcon").style.display = "block";
    

  } else if (w > 820) {
    document.getElementsByClassName("menuItem")[0].removeAttribute("style");
    document.getElementsByClassName("menuItem")[1].removeAttribute("style");
    document.getElementsByClassName("menuItem")[2].removeAttribute("style");
    document.getElementsByClassName("menuItem")[3].removeAttribute("style");
    document.getElementsByClassName("menuItem")[4].removeAttribute("style");
    document.getElementsByClassName("menuItem")[5].style.marginRight = "50px";
    document.getElementById("logo").style.left = "10px";
    document.getElementById("menuIcon").style.display = "none";
    document.getElementById("logo").style.removeProperty("right");
    
   
  }
});

window.onload = function () {  
 var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (w <= 820) {
     document.getElementsByClassName("menuItem")[0].style.display = "none";
    document.getElementsByClassName("menuItem")[1].style.display = "none";
    document.getElementsByClassName("menuItem")[2].style.display = "none";
    document.getElementsByClassName("menuItem")[3].style.display = "none";
    document.getElementsByClassName("menuItem")[4].style.display = "none";
    document.getElementsByClassName("menuItem")[5].style.marginRight = "20px";
    document.getElementById("logo").style.left = "0";
    document.getElementById("logo").style.right = "0";
    document.getElementById("menuIcon").style.display = "block";
  } else if (w > 820) {
    document.getElementsByClassName("menuItem")[0].removeAttribute("style");
    document.getElementsByClassName("menuItem")[1].removeAttribute("style");
    document.getElementsByClassName("menuItem")[2].removeAttribute("style");
    document.getElementsByClassName("menuItem")[3].removeAttribute("style");
    document.getElementsByClassName("menuItem")[4].removeAttribute("style");
    document.getElementsByClassName("menuItem")[5].style.marginRight = "50px";
}
 return;
};


$(".dropdown").click(function(){
  var x = $(".dropdown-content").css("display");
  if (x !== "block" ) {
    $(".dropdown-content").css("display", "block");
}
  else {
    $(".dropdown-content").css("display", "none");
  }
});
$(document).mouseup(function (e){
    var container1 = $('.dropdown');
   
    if (!container1.is(e.target) && container1.has(e.target).length === 0 )
    {
      $(".dropdown-content").css("display", "none");
    }
});
