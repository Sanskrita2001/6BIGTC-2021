// ------- PRELOADER -------//
$(window).load(function () {
  $(".preloader").fadeOut("slow"); // set duration in brackets
});
// ----- GOOGLE MAP ----- //
var map = "";
var center;

function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(13.758468, 100.567481),
    scrollwheel: false,
  };

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  google.maps.event.addDomListener(map, "idle", function () {
    calculateCenter();
  });

  google.maps.event.addDomListener(window, "resize", function () {
    map.setCenter(center);
  });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&" +
    "callback=initialize";
  document.body.appendChild(script);
}

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function () {
  events_sec();

  timeline();

  var deadline = new Date("March 04, 2021 10:00:00");
  initializeClock("clockdiv", deadline);

  $(window).resize(function () {
    events_sec();
  });

  // --------- HIDE MOBILE MENU AFTER CLIKING ON A LINK ------- //
  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // --------- PORTFOLIO IMAGE ----- //
  $("#portfolio a").nivoLightbox({
    effect: "fadeScale",
  });

  // ------- WOW ANIMATED ------ //
  wow = new WOW({
    mobile: false,
  });
  wow.init();

  // ------- GOOGLE MAP ----- //
  // loadGoogleMap();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $("#home").parallax("100%", 0.3);
  }
  initParallax();
});

function events_sec() {
  $('[class^="mob-ev-content-"]').hide();
  $('[class^="desk-ev-content-"]').hide();
  $(".ev-header-1").off("click");
  $(".ev-header-2").off("click");
  $(".ev-header-3").off("click");
  $(".ev-header-4").off("click");
  $(".ev-header-5").off("click");
  $(".ev-header-6").off("click");
  $(".ev-header-7").off("click");
  $(".ev-header-8").off("click");
  if (window.innerWidth < 930) {
    $(".ev-header-1").on("click", function () {
      $('[class^="desk-ev-content-"]').hide();
      $('[class^="mob-ev-content-"]:not(.mob-ev-content-1)').slideUp();
      $(".mob-ev-content-1").slideToggle();
    });
    $(".ev-header-2").on("click", function () {
      $('[class^="desk-ev-content-"]').hide();
      $('[class^="mob-ev-content-"]:not(.mob-ev-content-2)').slideUp();
      $(".mob-ev-content-2").slideToggle();
    });
    $(".ev-header-3").on("click", function () {
      $('[class^="desk-ev-content-"]').hide();
      $('[class^="mob-ev-content-"]:not(.mob-ev-content-3)').slideUp();
      $(".mob-ev-content-3").slideToggle();
    });
    $(".ev-header-4").on("click", function () {
      $('[class^="desk-ev-content-"]').hide();
      $('[class^="mob-ev-content-"]:not(.mob-ev-content-4)').slideUp();
      $(".mob-ev-content-4").slideToggle();
    });
    $(".ev-header-5").on("click", function () {
      $('[class^="desk-ev-content-"]').hide();
      $('[class^="mob-ev-content-"]:not(.mob-ev-content-5)').slideUp();
      $(".mob-ev-content-5").slideToggle();
    });
    $(".ev-header-6").on("click", function () {
      $('[class^="desk-ev-content-"]').hide();
      $('[class^="mob-ev-content-"]:not(.mob-ev-content-6)').slideUp();
      $(".mob-ev-content-6").slideToggle();
    });
    $(".ev-header-7").on("click", function () {
      $('[class^="desk-ev-content-"]').hide();
      $('[class^="mob-ev-content-"]:not(.mob-ev-content-7)').slideUp();
      $(".mob-ev-content-7").slideToggle();
    });
    $(".ev-header-8").on("click", function () {
      $('[class^="desk-ev-content-"]').hide();
      $('[class^="mob-ev-content-"]:not(.mob-ev-content-8)').slideUp();
      $(".mob-ev-content-8").slideToggle();
    });
  } else {
    $(".desk-ev-content-1").show();
    $(".ev-header-1").on("click", function () {
      $('[class^="mob-ev-content-"]').hide();
      $('[class^="desk-ev-content-"]').hide();
      $(".desk-ev-content-1").fadeIn();
    });
    $(".ev-header-2").on("click", function () {
      $('[class^="mob-ev-content-"]').hide();
      $('[class^="desk-ev-content-"]').hide();
      $(".desk-ev-content-2").fadeIn();
    });
    $(".ev-header-3").on("click", function () {
      $('[class^="mob-ev-content-"]').hide();
      $('[class^="desk-ev-content-"]').hide();
      $(".desk-ev-content-3").fadeIn();
    });
    $(".ev-header-4").on("click", function () {
      $('[class^="mob-ev-content-"]').hide();
      $('[class^="desk-ev-content-"]').hide();
      $(".desk-ev-content-4").fadeIn();
    });
    $(".ev-header-5").on("click", function () {
      $('[class^="mob-ev-content-"]').hide();
      $('[class^="desk-ev-content-"]').hide();
      $(".desk-ev-content-5").fadeIn();
    });
    $(".ev-header-6").on("click", function () {
      $('[class^="mob-ev-content-"]').hide();
      $('[class^="desk-ev-content-"]').hide();
      $(".desk-ev-content-6").fadeIn();
    });
    $(".ev-header-7").on("click", function () {
      $('[class^="mob-ev-content-"]').hide();
      $('[class^="desk-ev-content-"]').hide();
      $(".desk-ev-content-7").fadeIn();
    });
    $(".ev-header-8").on("click", function () {
      $('[class^="mob-ev-content-"]').hide();
      $('[class^="desk-ev-content-"]').hide();
      $(".desk-ev-content-8").fadeIn();
    });
  }
}

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

function timeline() {
  $('[id^="timeline-day-"]').hide();
  $("#timeline-day-1").show();
  $("#tab-timeline-day-1").on("click", function () {
    $('[id^="timeline-day-"]').hide();
    $("#timeline-day-1").fadeIn();
  });
  $("#tab-timeline-day-2").on("click", function () {
    $('[id^="timeline-day-"]').hide();
    $("#timeline-day-2").fadeIn();
  });
  $("#tab-timeline-day-3").on("click", function () {
    $('[id^="timeline-day-"]').hide();
    $("#timeline-day-3").fadeIn();
  });
}
