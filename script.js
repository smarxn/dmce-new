//main carousel section 👇
var $item = $(".carousel-item");
var $wHeight = $(window).height();
$item.eq(0).addClass("active");
$item.height($wHeight);
$item.addClass("full-screen");
$(".carousel img").each(function () {
  var $src = $(this).attr("src");
  var $color = $(this).attr("data-color");
  $(this)
    .parent()
    .css({
      "background-image": "url(" + $src + ")",
      "background-color": $color,
    });
  $(this).remove();
});
$(window).on("resize", function () {
  $wHeight = $(window).height();
  $item.height($wHeight);
});
$(".carousel").carousel({
  interval: 6000,
  pause: "false",
});

//news & updates 👇
$(function () {
  var tickerLength = $(".containerNews ul li").length;
  var tickerHeight = $(".containerNews ul li").outerHeight();
  $(".containerNews ul li:last-child").prependTo(".containerNews ul");
  $(".containerNews ul").css("marginTop", -tickerHeight);
  function moveTop() {
    $(".containerNews ul").animate(
      {
        top: -tickerHeight,
      },
      600,
      function () {
        $(".containerNews ul li:first-child").appendTo(".containerNews ul");
        $(".containerNews ul").css("top", "");
      }
    );
  }
  setInterval(function () {
    moveTop();
  }, 4000);
});

//achivements 👇
$(function () {
  var tickerLength = $(".containerAchive ul li").length;
  var tickerHeight = $(".containerAchive ul li").outerHeight();
  $(".containerNews ul li:last-child").prependTo(".containerAchive ul");
  $(".containerAchive ul").css("marginTop", -tickerHeight);
  function moveTop() {
    $(".containerAchive ul").animate(
      {
        top: -tickerHeight,
      },
      600,
      function () {
        $(".containerAchive ul li:first-child").appendTo(".containerAchive ul");
        $(".containerAchive ul").css("top", "");
      }
    );
  }
  setInterval(function () {
    moveTop();
  }, 3000); //duration 30sec
});

//popular events 👇
$(document).ready(function () {
  $("#testimonial-slide").owlCarousel({
    items: 3, //items to be shown
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    pagination: true,
    autoPlay: true,
  });
});

//testimonial section 👇
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 3, //items to be shown
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    pagination: true,
    autoPlay: true,
  });
});

//recruiters section 👇
var slider_at = 0;
var addSlide = setInterval(function () {
  let add =
    '<div class="slide">' +
    $($(".slider-track .slide")[slider_at]).html() +
    "</div>";
  $(".slider-track").append(add);
  slider_at = (slider_at + 1) % 10;
}, 3000);

//back to top button 👇
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// ❌ The End ❌
