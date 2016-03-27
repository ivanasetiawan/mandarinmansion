/* jshint devel:true */
$(document).ready(function() {
  // Init Slick on header on homepage. 
  $('.carousel-shop').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  var STICKY_HEADER = $('[data-header-sticky]');
  var STICKY_HEADER_HEIGHT = STICKY_HEADER.outerHeight();

  if (STICKY_HEADER.length) {
		$(window).scroll(function() {
			if ($(this).scrollTop() >= STICKY_HEADER_HEIGHT) {
				STICKY_HEADER
					.addClass('is-sticky');
				STICKY_HEADER.parents('.mainheader').addClass('has-sticky');
			} else {
				STICKY_HEADER
					.removeClass('is-sticky')
					.parents('.mainheader').removeClass('has-sticky');
			}
		});
  }
	
});
