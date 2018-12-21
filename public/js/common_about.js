;(function ($) {

    // Showing menu on desctop resolution
    window.onresize = function() {
        if (window.innerWidth > 1023) {
            $('.menu').show();
            $('.menu ul').show();
        }
    };

    // Toggling menu on mobile resolutions
    $(document).on('click', '.menu i', function () {
        var $menuIcon = $('.menu i');
        $menuIcon.toggleClass('active');
        if ($menuIcon.hasClass('active')) {
            $('.menu ul').slideDown(200);
        } else {
            $('.menu ul').slideUp(200);
        }
    });

    // Hiding and showing menu on mobile resolutions
    $(window).scroll(function () {
        if (window.innerWidth <= 1023) {
            var $menu = $('.menu');
            if ($(window).scrollTop() > 250) {
                $menu.slideUp(200);
                $menu.find('ul').slideUp(200);
            } else {
                $menu.slideDown(200);
            }
        }
    });

    //Scrolling page by menu
    $(document).on('click', '.menu a', function (e) {
        e.preventDefault();
        var activeSection = $('.section.active').attr('data-number'),
            nextSection = $(this).attr('href'),
            $this = $(this);
        $('.menu li').removeClass('active');
        $this.closest('li').addClass('active');
        if (activeSection !== nextSection) {
            $.fn.fullpage.moveTo(nextSection);
        }
    });

    //Slick slider
    $('#slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        asNavFor: '#slider-nav'
    });
    $('#slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '#slider-for',
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    //
    $('.case_item').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var content = $(this).find('.case_content').html();
        $('#contentModal .modal-body').html(content);
        $('#contentModal').modal('show');
    });

    $('.main .button:first-of-type').on('click', function (e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(3);
    });

    $('.main .button:last-of-type').on('click', function (e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(2);
    })





})(jQuery);