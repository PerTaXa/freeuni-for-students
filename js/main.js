$(document).ready(function () {
    $('#hamburger').click(function () {
        $('.mobile-menu').animate({
            width: 'toggle'
        }, 350);
    });

    $('.close').click(function () {
        $('.mobile-menu').animate({
            width: 'toggle'
        }, 350);
    })
});