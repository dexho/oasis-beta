$(function () {
    $('.semicircle').click(function () {
        if ($(this).hasClass("on")) {
            document.getElementById("semicircle").style.opacity = 0.45;
            move = '+=400px';
            $(this).toggleClass("on");
            angle = 0;
            $('#tab-arrow').toggleClass("rotated");
        } else {
            document.getElementById("semicircle").style.opacity = 0.75;
            move = '-=400px';
            $(this).toggleClass("on");
            angle = 180;
            $('#tab-arrow').toggleClass("rotated");
        }

        $(this).animate({left: move}, 1000);
        $('.info-panel-wrapper').animate({width: 'toggle'}, 1000);
        $('#tab-arrow').animate({rotate: angle}, {
            step: (angle, fx) => {
                $('#tab-arrow').css({
                    '-webkit-transform': 'rotate(' + angle + 'deg)',  /* Chrome, Safari 3.1+ */
                    '-moz-transform': 'rotate(' + angle + 'deg)',  /* Firefox 3.5-15 */
                    '-ms-transform': 'rotate(' + angle + 'deg)',  /* IE 9 */
                    '-o-transform': 'rotate(' + angle + 'deg)',  /* Opera 10.50-12.00 */
                    'transform': 'rotate(' + angle + 'deg)',  /* Firefox 16+, IE 10+, Opera 12.10+ */
                });
            },
            duration: 1000
        });
    }); // end click
});