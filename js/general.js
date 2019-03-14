
function footerAdj() {
    var footerH = $('footer').outerHeight();
    $("footer").css({ "margin-top": -footerH });
    $(".wrapper").css({ "padding-bottom": footerH });
}


$(document).ready(function () {


    /* Select Device Category Carousel */
    $('.main-banner-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navigation: true,
        dots: false,

    });
    $('.inner-banner-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navigation: true,
        dots: false,

    });
    $("#normal_select").dropkick();
    $('.bottom-slider').owlCarousel({
        loop: true,
        nav: true,
        navigation: true,
        margin:10,
        items: 5,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause:false
    });




});
$(window).resize(function () {
    footerAdj();
});


