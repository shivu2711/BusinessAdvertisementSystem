
function footerAdj(){
    var footerH=$('footer').outerHeight();
    $("footer").css({"margin-top": -footerH});
    $(".wrapper").css({"padding-bottom":footerH});
}


$(document).ready(function() {
    

    /* Select Device Category Carousel */
    $('.main-banner-slider').owlCarousel({
    	loop: true,
        items:1,
    	nav: true,
    	navigation: true,
    	dots: false,
    	
    });
   

    });
$(window).resize(function(){
footerAdj();
});


