$(document).ready(function(){

    $('.slider').slick({
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
	
	$('.slider2').slick({
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
			{
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $("#menu").mmenu({
        "slidingSubmenus": false,
        "extensions": [
            "pagedim-black",
            "theme-dark"
        ],
        "offCanvas": {
            "position": "right"
        }
    });
});



