$(window).on('load', function () {
    var preloader = $('.loader-area'),
        loader = preloader.find('.loader');
    loader.fadeOut();
    preloader.delay(350).fadeOut('slow');
});

$(function() {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
            $('.navbar-fixed-top').addClass('menu-scroll');
        } else {
            $('.scrollup').fadeOut('slow');
            $('.navbar-fixed-top').removeClass('menu-scroll');
        }
    });
    
    $('.scrollup').click(function () {
        $("html, body").animate( {scrollTop: 0}, 500 );
        return false;
    });
	
	$('.nav a[href^="#"]').click(function() {
		var target = $(this).attr('href');
		$('html, body').animate(
		    {
			    scrollTop: $(target).offset().top
		    },
			500
		);
	});
	
	$('.click-for-video').click(function() {
        this.style.display = 'none';
        $('div.youtube').css('display', 'block');
        $('iframe.youtube').prop('src', 'https://www.youtube.com/embed/8XXwZXPej3Q');
    });
});
