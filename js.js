//HIDE MENU IF WINDOW IS SMALL
window.addEventListener("resize", function () {
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
    $(".dropdown-content").css("display", "none");
  }
});

//CHECK WIDTH ON LOAD
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

//MENU BUTTON
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
    if (!container1.is(e.target) && container1.has(e.target).length === 0 ){
      $(".dropdown-content").css("display", "none");
    }
});

//ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        $(this).next().toggleClass("show");
        $(".accordion").not(this).next().removeClass("show");
        $(".accordion").not(this).children(".s6arrow").attr("src", 'images/6-arrow-down.png');
        var arrow = $(this).children(".s6arrow").attr("src");
        if (arrow === "images/6-arrow-down.png") {
          $(this).children(".s6arrow").attr("src", 'images/6-arrow-up.png');
        } else {
          $(this).children(".s6arrow").attr("src", 'images/6-arrow-down.png');
        }
  };
}

//OPEN THE FIRST SECTION OF THE ACCORDION ON PAGE LOAD
$(function(){
	var acc1 = document.getElementsByClassName("accordion");
  $(".accordion").first().next().toggleClass("show");
  $(".accordion").first().children(".s6arrow").attr("src", 'images/6-arrow-up.png');
});

//CUSTOM SCROLLBAR
$(function(){
	$('.test').jScrollPane();
});

//BOOTSTRAP CAROUSEL
$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel("pause");

    // Go to the previous item
    $("#myBtn").click(function(){
        $("#myCarousel").carousel("prev");
    });

    // Go to the next item
    $("#myBtn2").click(function(){
        $("#myCarousel").carousel("next");
    });
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
});