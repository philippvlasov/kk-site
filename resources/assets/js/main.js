;(function ($) {

    // Showing menu on desctop resolution
    window.onresize = function() {
        if (window.innerWidth > 1024) {
            $('.menu').show();
            $('.menu ul').show();
        }
    };

    // Toggling menu on mobile resolutions
    $(document).on('click', '.menu i', function () {
        let $menuIcon = $('.menu i');
        $menuIcon.toggleClass('active');
        if ($menuIcon.hasClass('active')) {
            $('.menu ul').slideDown(200);
        } else {
            $('.menu ul').slideUp(200);
        }
    });

    // Hiding and showing menu on mobile resolutions
    $(window).scroll(function () {
        if (window.innerWidth <= 1024) {
            let $menu = $('.menu');
            if ($(window).scrollTop() > 250) {
                $menu.slideUp(200);
                $menu.find('ul').slideUp(200);
            } else {
                $menu.slideDown(200);
            }
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
        let content = $(this).find('.case_content').html();
        $('#contentModal .modal-body').html(content);
        if ($('.main-content').hasClass('main_page')) {
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
        }
        $('#contentModal').modal('show');
    });

    $('.main .button:last-of-type').on('click', function (e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(2);
    });

    //Cart
    $('#cart').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        let $modalBody = $('.modal-body');
        $modalBody.empty();

        let result = {},
            $activeInputs = $('.tab-content input:checkbox:checked ~ .item_name');

        if ($activeInputs.length === 0) {
            $modalBody.append('<h4>Ничего не выбрано :(</h4>');
            $('#contentModal').modal('show');
        } else {
            $activeInputs.each(function (item, i) {

                let $element = $(i),
                    groupName = $element.closest('.tab-pane').find('h4:first').text();
                result[groupName] = result[groupName] || [];
                result[groupName].push(i);
            });

            $modalBody.append('<ul class="cart"></ul>');
            $modalBody.append('<div class="button-wrapper">\n' +
                '                    <a href="#" class="button button_inverse" id="send">Узнать цену</a>\n' +
                '                </div>');

            $.each(result, function (i, val) {
                $modalBody.find('ul').append('<h4>' + i + '</h4>');
                $.each(val, function () {
                    $modalBody.find('ul').append('<li id="' + this.id + '">' +
                        '<label>' +
                        '<input name="service[' + i + ']" type="checkbox" checked >' +
                        '<span class="checkmark"></span>' +
                        '<span class="item_name">' + this.innerHTML + '</span>' +
                        '</label>' +
                        '</li>');
                });
            });
            $('#contentModal').modal('show');
        }
    });

    // Unselecting items from the cart
    $(document).on('click', 'ul.cart li', function () {
        let $this = $(this);
        let currentId = $this.attr('id');
        $('#' + currentId + '').closest('li').find('input').prop("checked", false);
        console.log();
        $this.addClass('unchecked');
        $this.hide(500);
        setTimeout(function () {
            let group = $this.find('input').attr('name');
            if ($('input[name="' + group + '"]').length === 1) {
                $this.prev('h4').hide(300);
            }
            $this.remove();
        }, 501);
    });



























})(jQuery);