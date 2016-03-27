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

	// Returns a function, that, as long as it continues to be invoked, will not
	// be triggered. The function will be called after it stops being called for
	// N milliseconds. If `immediate` is passed, trigger the function on the
	// leading edge, instead of the trailing.
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

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
