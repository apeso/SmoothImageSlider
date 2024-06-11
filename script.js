$(document).ready(function() {
    var totalImages = 9;
    var images = [];

    for (var i = 1; i <= totalImages; i++) {
        images.push('assets/slider-image-' + i + '.jpg');
    }

    function renderImages() {
        var sliderRow1 = $('#slider-row-1');
        var sliderRow2 = $('#slider-row-2');
        sliderRow1.empty();
        sliderRow2.empty();

        for (var i = 0; i < 5; i++) {
            var img = $('<img>').attr('src', images[i]).attr('alt', 'Slika ' + (i + 1));
            sliderRow1.append(img);
        }

        for (var i = 5; i < 9; i++) {
            var img = $('<img>').attr('src', images[i]).attr('alt', 'Slika ' + (i + 1));
            sliderRow2.append(img);
        }

        var leftArrowImg = $('<img>').attr('src', 'assets/arrow-blue-left.png').addClass('arrow').attr('id', 'left-arrow');
        var rightArrowImg = $('<img>').attr('src', 'assets/arrow-blue-right.png').addClass('arrow').attr('id', 'right-arrow');

        var arrowsDiv = $('<div>').addClass('arrows');
        arrowsDiv.append(leftArrowImg).append(rightArrowImg);
        sliderRow2.append(arrowsDiv);

        $('#left-arrow').on('click', function() {
            moveSlider('left');
        });

        $('#right-arrow').on('click', function() {
            moveSlider('right');
        });
    }

    renderImages();

    function moveSlider(direction) {
        if (direction === 'right') {
            var lastImage = images.pop();
            images.unshift(lastImage);
        } else if (direction === 'left') {
            var firstImage = images.shift();
            images.push(firstImage);
        }

        $('.slider').addClass('transition');

        setTimeout(function() {
            renderImages();
        }, 200);

        setTimeout(function() {
            $('.slider').removeClass('transition');
        }, 700); 
    }
});
