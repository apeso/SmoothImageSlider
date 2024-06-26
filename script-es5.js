"use strict";

$(document).ready(function () {
  var $sliderTopRow = $('#slider-top-row');
  var $sliderBottomRow = $('#slider-bottom-row');
  var $imagesTopRow = $sliderTopRow.find('img');
  var $imagesBottomRow = $sliderBottomRow.find('img');
  var moveSlider = function moveSlider(direction) {
    if (direction === 'right') {
      var distanceTopRow = $imagesTopRow.last().width() + 10;
      $sliderTopRow.css({
        transition: 'transform 1s ease',
        transform: "translateX(".concat(distanceTopRow, "px)")
      });
      var distanceBottomRow = $imagesBottomRow.last().width() + 10;
      $sliderBottomRow.css({
        transition: 'transform 1s ease',
        transform: "translateX(".concat(distanceBottomRow, "px)")
      });
      setTimeout(function () {
        $sliderTopRow.prepend($imagesTopRow.last());
        $sliderTopRow.css({
          transition: 'none',
          transform: 'none'
        });
        $imagesTopRow = $sliderTopRow.find('img');
        $sliderBottomRow.prepend($imagesBottomRow.last());
        $sliderBottomRow.css({
          transition: 'none',
          transform: 'none'
        });
        $imagesBottomRow = $sliderBottomRow.find('img');
      }, 1000);
    } else if (direction === 'left') {
      var _distanceTopRow = $imagesTopRow.first().width() + 10;
      $sliderTopRow.css({
        transition: 'transform 1s ease',
        transform: "translateX(-".concat(_distanceTopRow, "px)")
      });
      var _distanceBottomRow = $imagesBottomRow.first().width() + 10;
      $sliderBottomRow.css({
        transition: 'transform 1s ease',
        transform: "translateX(-".concat(_distanceBottomRow, "px)")
      });
      setTimeout(function () {
        $sliderTopRow.append($imagesTopRow.first());
        $sliderTopRow.css({
          transition: 'none',
          transform: 'none'
        });
        $imagesTopRow = $sliderTopRow.find('img');
        $sliderBottomRow.append($imagesBottomRow.first());
        $sliderBottomRow.css({
          transition: 'none',
          transform: 'none'
        });
        $imagesBottomRow = $sliderBottomRow.find('img');
      }, 1000);
    }
  };
  $('#left-arrow').click(function () {
    moveSlider('left');
  });
  $('#right-arrow').click(function () {
    moveSlider('right');
  });
});
