// AS OCCURED / AS RECALLED
var DIR_IN = 1;
var DIR_OUT = 0;
var FADE_IN = 0;

var turnedOn = true;
var currentAnimation = FADE_IN;
var speed = 200;
var loop = true;

var $occurred = $(".occurred");
var $recalled = $(".recalled");

$recalled.spanLetters();

var $recalledSpans = $('.recalled span');
shuffle($recalledSpans);

if (loop) {
  loopAnimation(true);
}

$(".logo-container").on("mouseenter", function() {
  if (!loop) {
    turnedOn = true;
    $occurred.addClass("expand");
    setTimeout(function() {
      animateInRecalled(0);
    }, 800);
  }
});

$(".logo-container").on("mouseleave", function() {
  if (!loop) {
    turnedOn = false;
    $occurred.removeClass("expand");
    setTimeout(function() {
      animateOutRecalled(0);
    }, 800);
  }
});

function loopAnimation(show) {
  turnedOn = show;
  $occurred.toggleClass("expand");
  setTimeout(function() {
    if (show)
      animateInRecalled(0);
    else
      animateOutRecalled();

    setTimeout(function() {
      loopAnimation(!show);
    }, (speed * $recalledSpans.length) + 1000);
  }, 800);
}

function animateInRecalled(animation) {
  switch (animation) {
    case 0:
      shuffleFade(DIR_IN);
      break;
    default:
      shuffleFade(DIR_IN);
  }
}

function animateOutRecalled(animation) {
  switch (animation) {
    case 0:
      shuffleFade(DIR_OUT);
      break;
    default:
      shuffleFade(DIR_OUT);
  }
}

function shuffleFade(direction) {
  $recalledSpans.each(function(idx, sl) {

    setTimeout(function() {
      if (direction === DIR_IN) {
        if (turnedOn) $(sl).addClass("fade-in");
      } else {
        if (!turnedOn) $(sl).removeClass("fade-in");
      }
    }, idx * speed);

  });
}

function shuffle(array) {
  var i = 0,
    j = 0,
    temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
