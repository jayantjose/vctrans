$(document).ready(function() {
    
    // 1. Sticky Header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#site-header').addClass('scrolled');
        } else {
            $('#site-header').removeClass('scrolled');
        }
    });

    // Run on init as well
    if ($(window).scrollTop() > 50) {
        $('#site-header').addClass('scrolled');
    }

    // 2. Mobile Menu Toggle
    $('.mobile-menu-btn').click(function() {
        $(this).toggleClass('active');
        $('.main-nav').toggleClass('active');
        
        // Optional: Animate hamburger icon
        if($(this).hasClass('active')) {
            $(this).find('span:eq(0)').css({'transform': 'rotate(45deg) translate(5px, 5px)'});
            $(this).find('span:eq(1)').css({'opacity': '0'});
            $(this).find('span:eq(2)').css({'transform': 'rotate(-45deg) translate(7px, -6px)'});
            $('body').css('overflow', 'hidden'); // Prevent scroll when menu is open
        } else {
            $(this).find('span').attr('style', '');
            $('body').css('overflow', 'auto');
        }
    });

    // 3. Mobile Sub-menu Toggle
    $('.has-dropdown > a').click(function(e) {
        if($(window).width() <= 768) {
            e.preventDefault();
            $(this).parent().toggleClass('active');
        }
    });

    // 4. Smooth Scrolling for Anchor Links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        
        if (target.length) {
            event.preventDefault();
            
            // Close mobile menu if open
            if ($('.main-nav').hasClass('active')) {
                $('.mobile-menu-btn').click();
            }

            var offset = target.offset().top - 70; // 70px offset for sticky header

            $('html, body').stop().animate({
                scrollTop: offset
            }, 800);
        }
    });

    // 5. Contact Form Display behavior (prevent reload)
    $('.get-quote-form').submit(function(e) {
        e.preventDefault();
        alert('Thank you for getting in touch. We will reply soon!');
        $(this)[0].reset();
    });

});
