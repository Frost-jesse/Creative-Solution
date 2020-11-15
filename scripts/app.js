$(document).ready(function() {
    $("#navBar").click(function() {
        $('ul.header-nav-list, .header-nav-bar').toggleClass('nav-open');
    });

    $('a[href^="#"]').click(function() {
        let anchor = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(anchor).offset().top
        }, 600);
    });

    $('#works-carousel').owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],

        responsive: {

            767.98: {
                nav:false
            },

            991.98: {
                nav:true
            },

            1199.98: {
                autoplay:true,
                autoplayTimeout:3000
            }
        }
    });

    $('#team-carousel').owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:true,
        margin:20,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],

        responsive: {

            767.98: {
                nav:true,
                margin:30,
                items:2
            },

            991.98: {
                nav:false,
                items:3,
                autoWidth:true
            },

            1199.98: {
                dots:false,
                items:3,
                autoWidth:false
            }
        }
    });
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 20) {
        $('.header-nav-menu,.header-nav-list').addClass("blur");
    } else {
        $('.header-nav-menu,.header-nav-list').removeClass("blur");
    }
});