/* HEADER MENU >>
=================================================================================================== */
$(function () {

    function openMenu() {
        $('.header').append('<div class="splash"></div>');
        $('body').addClass('menu-open');
    }

    function closeMenu() {
        $('body').removeClass('menu-open');
        $('.splash').detach();
    }

    $(document).on('click', '.btn-menu,.splash', function () {
        if ($('body').hasClass('menu-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    $(window).resize(function () {
        if ($(window).width() > 768) {
            closeMenu();
        }
    });
});


/* SCROLL PAGE >>
=================================================================================================== */
$(function () {
    function addClassScroll() {
        $('body').addClass('scroll');
    }

    function removeClassScroll() {
        $('body').removeClass('scroll');
    }

    if ($(window).scrollTop() >= 5) {
        addClassScroll();
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 5) {
            addClassScroll();
        } else {
            removeClassScroll();
        }
    });

});