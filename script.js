$(document).ready(() => {
    const $sliderTopRow = $('#slider-top-row');
    const $sliderBottomRow = $('#slider-bottom-row');

    let $imagesTopRow = $sliderTopRow.find('img');
    let $imagesBottomRow = $sliderBottomRow.find('img');

    const moveSlider = (direction) => {
        if (direction === 'right') {
            const distanceTopRow = $imagesTopRow.last().width() + 10;
            $sliderTopRow.css({
                transition: 'transform 1s ease',
                transform: `translateX(${distanceTopRow}px)`
            });

            const distanceBottomRow = $imagesBottomRow.last().width() + 10;
            $sliderBottomRow.css({
                transition: 'transform 1s ease',
                transform: `translateX(${distanceBottomRow}px)`
            });

            setTimeout(() => {
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
            const distanceTopRow = $imagesTopRow.first().width() + 10;
            $sliderTopRow.css({
                transition: 'transform 1s ease',
                transform: `translateX(-${distanceTopRow}px)`
            });

            const distanceBottomRow = $imagesBottomRow.first().width() + 10;
            $sliderBottomRow.css({
                transition: 'transform 1s ease',
                transform: `translateX(-${distanceBottomRow}px)`
            });

            setTimeout(() => {
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

    $('#left-arrow').click(() => {
        moveSlider('left');
    });

    $('#right-arrow').click(() => {
        moveSlider('right');
    });
});
