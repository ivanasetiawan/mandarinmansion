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

  // Sticky header
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
	
  // Tabs
  var MENU_TABS = $('[data-menu-tabs]');
  var MENU_TARGETS = $('[data-menu-tabs-target]');

  if (MENU_TABS.length) {
    MENU_TABS.find('a').each(function() {
      $(this).on('click', function(event) {
        event.preventDefault();
        MENU_TARGETS.removeClass('is-active');
        MENU_TABS.find('a').removeClass('is-active');
        
        $(this).addClass('is-active');
        var targetElID = $(this).attr('href');
        $(targetElID).addClass('is-active');
      });
    });
  }

});

