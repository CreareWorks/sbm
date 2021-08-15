$(function() {
    $('.resulut-slider').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 585,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});