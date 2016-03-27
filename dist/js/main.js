(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* jshint devel:true */
$(document).ready(function () {
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
		return function () {
			var context = this,
			    args = arguments;
			var later = function () {
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
		$(window).scroll(function () {
			if ($(this).scrollTop() >= STICKY_HEADER_HEIGHT) {
				STICKY_HEADER.addClass('is-sticky');
				STICKY_HEADER.parents('.mainheader').addClass('has-sticky');
			} else {
				STICKY_HEADER.removeClass('is-sticky').parents('.mainheader').removeClass('has-sticky');
			}
		});
	}
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNDQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVc7O0FBRTNCLEdBQUUsZ0JBQUYsRUFBb0IsS0FBcEIsQ0FBMEI7QUFDeEIsUUFBTSxJQUFOO0FBQ0EsVUFBUSxLQUFSO0FBQ0EsWUFBVSxJQUFWO0FBQ0EsU0FBTyxHQUFQO0FBQ0EsUUFBTSxJQUFOO0FBQ0EsV0FBUyxRQUFUO0VBTkY7Ozs7OztBQUYyQixVQWVuQixRQUFULENBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLFNBQTlCLEVBQXlDO0FBQ3hDLE1BQUksT0FBSixDQUR3QztBQUV4QyxTQUFPLFlBQVc7QUFDakIsT0FBSSxVQUFVLElBQVY7T0FBZ0IsT0FBTyxTQUFQLENBREg7QUFFakIsT0FBSSxRQUFRLFlBQVc7QUFDdEIsY0FBVSxJQUFWLENBRHNCO0FBRXRCLFFBQUksQ0FBQyxTQUFELEVBQVksS0FBSyxLQUFMLENBQVcsT0FBWCxFQUFvQixJQUFwQixFQUFoQjtJQUZXLENBRks7QUFNakIsT0FBSSxVQUFVLGFBQWEsQ0FBQyxPQUFELENBTlY7QUFPakIsZ0JBQWEsT0FBYixFQVBpQjtBQVFqQixhQUFVLFdBQVcsS0FBWCxFQUFrQixJQUFsQixDQUFWLENBUmlCO0FBU2pCLE9BQUksT0FBSixFQUFhLEtBQUssS0FBTCxDQUFXLE9BQVgsRUFBb0IsSUFBcEIsRUFBYjtHQVRNLENBRmlDO0VBQXpDLENBZjRCOztBQThCM0IsS0FBSSxnQkFBZ0IsRUFBRSxzQkFBRixDQUFoQixDQTlCdUI7QUErQjNCLEtBQUksdUJBQXVCLGNBQWMsV0FBZCxFQUF2QixDQS9CdUI7O0FBaUMzQixLQUFJLGNBQWMsTUFBZCxFQUFzQjtBQUMxQixJQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQVc7QUFDM0IsT0FBSSxFQUFFLElBQUYsRUFBUSxTQUFSLE1BQXVCLG9CQUF2QixFQUE2QztBQUNoRCxrQkFDRSxRQURGLENBQ1csV0FEWCxFQURnRDtBQUdoRCxrQkFBYyxPQUFkLENBQXNCLGFBQXRCLEVBQXFDLFFBQXJDLENBQThDLFlBQTlDLEVBSGdEO0lBQWpELE1BSU87QUFDTixrQkFDRSxXQURGLENBQ2MsV0FEZCxFQUVFLE9BRkYsQ0FFVSxhQUZWLEVBRXlCLFdBRnpCLENBRXFDLFlBRnJDLEVBRE07SUFKUDtHQURnQixDQUFqQixDQUQwQjtFQUExQjtDQWpDZ0IsQ0FBbEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoganNoaW50IGRldmVsOnRydWUgKi9cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAvLyBJbml0IFNsaWNrIG9uIGhlYWRlciBvbiBob21lcGFnZS4gXG4gICQoJy5jYXJvdXNlbC1zaG9wJykuc2xpY2soe1xuICAgIGRvdHM6IHRydWUsXG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIGZhZGU6IHRydWUsXG4gICAgY3NzRWFzZTogJ2xpbmVhcidcbiAgfSk7XG5cblx0Ly8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuXHQvLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG5cdC8vIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuXHQvLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuXHRmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcblx0XHR2YXIgdGltZW91dDtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG5cdFx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRcdGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdFx0fTtcblx0XHRcdHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHRcdFx0aWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0fTtcblx0fTtcblxuICB2YXIgU1RJQ0tZX0hFQURFUiA9ICQoJ1tkYXRhLWhlYWRlci1zdGlja3ldJyk7XG4gIHZhciBTVElDS1lfSEVBREVSX0hFSUdIVCA9IFNUSUNLWV9IRUFERVIub3V0ZXJIZWlnaHQoKTtcblxuICBpZiAoU1RJQ0tZX0hFQURFUi5sZW5ndGgpIHtcblx0XHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPj0gU1RJQ0tZX0hFQURFUl9IRUlHSFQpIHtcblx0XHRcdFx0U1RJQ0tZX0hFQURFUlxuXHRcdFx0XHRcdC5hZGRDbGFzcygnaXMtc3RpY2t5Jyk7XG5cdFx0XHRcdFNUSUNLWV9IRUFERVIucGFyZW50cygnLm1haW5oZWFkZXInKS5hZGRDbGFzcygnaGFzLXN0aWNreScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0U1RJQ0tZX0hFQURFUlxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnaXMtc3RpY2t5Jylcblx0XHRcdFx0XHQucGFyZW50cygnLm1haW5oZWFkZXInKS5yZW1vdmVDbGFzcygnaGFzLXN0aWNreScpO1xuXHRcdFx0fVxuXHRcdH0pO1xuICB9XG5cdFxuXG59KTtcbiJdfQ==
