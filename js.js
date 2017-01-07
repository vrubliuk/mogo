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
$(".dropdown").click(function () {
  var x = $(".dropdown-content").css("display");
  if (x !== "block") {
    $(".dropdown-content").css("display", "block");
  } else {
    $(".dropdown-content").css("display", "none");
  }
});
$(document).mouseup(function (e) {
  var container1 = $('.dropdown');
  if (!container1.is(e.target) && container1.has(e.target).length === 0) {
    $(".dropdown-content").css("display", "none");
  }
});

//ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
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
$(function () {
  var acc1 = document.getElementsByClassName("accordion");
  $(".accordion").first().next().toggleClass("show");
  $(".accordion").first().children(".s6arrow").attr("src", 'images/6-arrow-up.png');
});

//CUSTOM SCROLLBAR
$(function () {
  $('.test').jScrollPane();
});

//BOOTSTRAP CAROUSEL SECTION 7
$(document).ready(function () {
  // Activate Carousel
  $("#myCarousel").carousel("pause");

  // Go to the previous item
  $("#myBtn").click(function () {
    $("#myCarousel").carousel("prev");
  });

  // Go to the next item
  $("#myBtn2").click(function () {
    $("#myCarousel").carousel("next");
  });

  // Enable Carousel Indicators
  $(".item1").click(function () {
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function () {
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function () {
    $("#myCarousel").carousel(2);
  });
});

// SECTION 10 BEHAVIOUR
window.addEventListener("resize", function () {
  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (w <= 1220) {
    document.getElementsByClassName("outerTileContainer10")[0].style.width = "100%";
    document.getElementsByClassName("outerTileContainer10")[1].style.width = "100%";
  } else if (w > 1220) {
    document.getElementsByClassName("outerTileContainer10")[0].style.width = "50%";
    document.getElementsByClassName("outerTileContainer10")[1].style.width = "50%";
  }
});
//CHECK WIDTH ON LOAD
window.onload = function () {
  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (w <= 1220) {
    document.getElementsByClassName("outerTileContainer10")[0].style.width = "100%";
    document.getElementsByClassName("outerTileContainer10")[1].style.width = "100%";
  } else if (w > 1220) {
    document.getElementsByClassName("outerTileContainer10")[0].style.width = "50%";
    document.getElementsByClassName("outerTileContainer10")[1].style.width = "50%";
  }
  return;
};

//BOOTSTRAP CAROUSEL SECTION 11
$(document).ready(function () {
  // Activate Carousel
  $("#myCarousel11").carousel("pause");

  // Go to the previous item
  $("#myBtn3").click(function () {
    $("#myCarousel11").carousel("prev");
  });

  // Go to the next item
  $("#myBtn4").click(function () {
    $("#myCarousel11").carousel("next");
  });

  // Enable Carousel Indicators
  $(".item1").click(function () {
    $("#myCarousel11").carousel(0);
  });
  $(".item2").click(function () {
    $("#myCarousel11").carousel(1);
  });
  $(".item3").click(function () {
    $("#myCarousel11").carousel(2);
  });
});

// SMOOTH SCROLLING WHEN CLICKING AN ANCHOR LINK
  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 700);
    return false;
});