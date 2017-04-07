$(function(){

    // functionality not implemented
    $('.header__menu').css({
        'left': $('header').offset().left + 15,
        'right': $(window).outerWidth() - $('header').offset().left - $('header').outerWidth() + 15
    })
});
