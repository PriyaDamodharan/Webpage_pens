var topPos;
var leftPos;
var pers;
var rotation;

var positionStars = function (element) {
  var e = $(element);
  $(e).each(function (index, item) {
    topPos = Math.floor(Math.random() * $(window).height());
    leftPos = Math.floor(Math.random() * $(window).width());

    var $this = $(this);
    $this.css({
      top: topPos,
      left: leftPos,
      position: "fixed"
    });
  });
};

positionStars(".small");
positionStars(".big");
positionStars(".tiny");
positionStars(".medium");