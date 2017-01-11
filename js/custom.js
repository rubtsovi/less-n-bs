/**
 * Created by rubtsovi on 10.01.2017.
 */
$(document).ready(function () {

//    Top slider
    $('#top-slider').carousel({
        interval : 4000
    });

    $('#promo-slider').carousel({
        interval: 3000
    });
    MobileMenu();


});

//scroll dla naglowka
$(window).on('scroll',function () {
    if($(window).scrollTop() > 20){
        $('.main-header').addClass('header-short');
    } else {
        $('.main-header').removeClass('header-short');
    }
})

function MobileMenu() {
    $('.mobile-nav-button').on('click', function (e) {
        e.preventDefault();
        $('#main-nav-mobile').toggleClass('active');
    });
    $('#mobile-close').on('click', function (e) {
        e.preventDefault();
        $('#main-nav-mobile').removeClass('active');
    })
}
