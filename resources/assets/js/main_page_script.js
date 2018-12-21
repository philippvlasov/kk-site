;(function($){
//Fullpage parameters and changing bg function
    $(document).ready(function () {
        $('#fullpage').fullpage({
            navigation: false,
            autoScrolling: true,
            scrollingSpeed: 700,
            scrollHorizontally: false,
            verticalCentered: true,
            responsiveWidth: 1024,
            afterLoad: function changeBg () {
                let $activeArticle = $('.main-content .section.active');
                let imagePath = $activeArticle.attr('data-custom-background-img');
                let newImage = new Image();
                let $bg = $('.bg');
                newImage.src = imagePath;
                let src = newImage.getAttribute('src');
                newImage.onload = function () {
                    if (src === $('.main-content .section.active').attr('data-custom-background-img')) {
                        $bg.css('background-image', 'url(' + imagePath + ')');
                    }
                };
                if (newImage.naturalWidth) {
                    $bg.css('background-image', 'url(' + imagePath + ')');
                }
                let activeSection = $('.section.active').attr('data-number');
                $('.menu li').removeClass('active');
                $('.menu li a[href="' + activeSection + '"]').closest('li').addClass('active');
            },
        });
    });

//Scrolling page by menu
    $(document).on('click', '.menu a', function (e) {
        e.preventDefault();
        let activeSection = $('.section.active').attr('data-number'),
            nextSection = $(this).attr('data-section'),
            $this = $(this);
        $('.menu li').removeClass('active');
        $this.closest('li').addClass('active');
        if (activeSection !== nextSection) {
            $.fn.fullpage.moveTo(nextSection);
        }
    });

    $('#contentModal').on('hidden.bs.modal', function () {
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
    });

    $('.case_item').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        let content = $(this).find('.case_content').html();
        $('#contentModal .modal-body').html(content);
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
        $('#contentModal').modal('show');
    });
})(jQuery);