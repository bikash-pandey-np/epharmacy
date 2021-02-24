$(document).ready(function(){
    //showcase owl carousel 
    $('#showcase-carousel').owlCarousel({
        autoplay : 3000,

        items: 1,
        nav: true,
        
    });
    //showcase owl carousel 
    $('#topProductGrid').owlCarousel({
        autoplay : 3000,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 4
            }
        },
        
    });
});