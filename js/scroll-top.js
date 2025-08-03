$(document).ready(function () {
    $('.scrollToTop').click(function () {
        $('body, html').animate({
            scrollTop: '0px'
        }, 1500);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.scrollToTop').slideDown(500);
        } else {
            $('.scrollToTop').slideUp(500);
        }
        ;
    });

    var altura = $('.menu').offset().top;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altura) {
            $('.menu').addClass('fixed-top');
        } else {
            $('.menu').removeClass('fixed-top');
        }
    });

});