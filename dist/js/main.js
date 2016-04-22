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

  // Sticky header
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

  // Tabs
  var MENU_TABS = $('[data-menu-tabs]');
  var MENU_TARGETS = $('[data-menu-tabs-target]');

  if (MENU_TABS.length) {
    MENU_TABS.find('a').each(function () {
      $(this).on('click', function (event) {
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNDQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVc7O0FBRTNCLElBQUUsZ0JBQUYsRUFBb0IsS0FBcEIsQ0FBMEI7QUFDeEIsVUFBTSxJQUFOO0FBQ0EsWUFBUSxLQUFSO0FBQ0EsY0FBVSxJQUFWO0FBQ0EsV0FBTyxHQUFQO0FBQ0EsVUFBTSxJQUFOO0FBQ0EsYUFBUyxRQUFUO0dBTkY7OztBQUYyQixNQVl2QixnQkFBZ0IsRUFBRSxzQkFBRixDQUFoQixDQVp1QjtBQWEzQixNQUFJLHVCQUF1QixjQUFjLFdBQWQsRUFBdkIsQ0FidUI7O0FBZTNCLE1BQUksY0FBYyxNQUFkLEVBQXNCO0FBQzFCLE1BQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBVztBQUMzQixVQUFJLEVBQUUsSUFBRixFQUFRLFNBQVIsTUFBdUIsb0JBQXZCLEVBQTZDO0FBQ2hELHNCQUNFLFFBREYsQ0FDVyxXQURYLEVBRGdEO0FBR2hELHNCQUFjLE9BQWQsQ0FBc0IsYUFBdEIsRUFBcUMsUUFBckMsQ0FBOEMsWUFBOUMsRUFIZ0Q7T0FBakQsTUFJTztBQUNOLHNCQUNFLFdBREYsQ0FDYyxXQURkLEVBRUUsT0FGRixDQUVVLGFBRlYsRUFFeUIsV0FGekIsQ0FFcUMsWUFGckMsRUFETTtPQUpQO0tBRGdCLENBQWpCLENBRDBCO0dBQTFCOzs7QUFmMkIsTUE4QnZCLFlBQVksRUFBRSxrQkFBRixDQUFaLENBOUJ1QjtBQStCM0IsTUFBSSxlQUFlLEVBQUUseUJBQUYsQ0FBZixDQS9CdUI7O0FBaUMzQixNQUFJLFVBQVUsTUFBVixFQUFrQjtBQUNwQixjQUFVLElBQVYsQ0FBZSxHQUFmLEVBQW9CLElBQXBCLENBQXlCLFlBQVc7QUFDbEMsUUFBRSxJQUFGLEVBQVEsRUFBUixDQUFXLE9BQVgsRUFBb0IsVUFBUyxLQUFULEVBQWdCO0FBQ2xDLGNBQU0sY0FBTixHQURrQztBQUVsQyxxQkFBYSxXQUFiLENBQXlCLFdBQXpCLEVBRmtDO0FBR2xDLGtCQUFVLElBQVYsQ0FBZSxHQUFmLEVBQW9CLFdBQXBCLENBQWdDLFdBQWhDLEVBSGtDOztBQUtsQyxVQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLFdBQWpCLEVBTGtDO0FBTWxDLFlBQUksYUFBYSxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsTUFBYixDQUFiLENBTjhCO0FBT2xDLFVBQUUsVUFBRixFQUFjLFFBQWQsQ0FBdUIsV0FBdkIsRUFQa0M7T0FBaEIsQ0FBcEIsQ0FEa0M7S0FBWCxDQUF6QixDQURvQjtHQUF0QjtDQWpDZ0IsQ0FBbEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoganNoaW50IGRldmVsOnRydWUgKi9cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAvLyBJbml0IFNsaWNrIG9uIGhlYWRlciBvbiBob21lcGFnZS4gXG4gICQoJy5jYXJvdXNlbC1zaG9wJykuc2xpY2soe1xuICAgIGRvdHM6IHRydWUsXG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIGZhZGU6IHRydWUsXG4gICAgY3NzRWFzZTogJ2xpbmVhcidcbiAgfSk7XG5cbiAgLy8gU3RpY2t5IGhlYWRlclxuICB2YXIgU1RJQ0tZX0hFQURFUiA9ICQoJ1tkYXRhLWhlYWRlci1zdGlja3ldJyk7XG4gIHZhciBTVElDS1lfSEVBREVSX0hFSUdIVCA9IFNUSUNLWV9IRUFERVIub3V0ZXJIZWlnaHQoKTtcblxuICBpZiAoU1RJQ0tZX0hFQURFUi5sZW5ndGgpIHtcblx0XHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPj0gU1RJQ0tZX0hFQURFUl9IRUlHSFQpIHtcblx0XHRcdFx0U1RJQ0tZX0hFQURFUlxuXHRcdFx0XHRcdC5hZGRDbGFzcygnaXMtc3RpY2t5Jyk7XG5cdFx0XHRcdFNUSUNLWV9IRUFERVIucGFyZW50cygnLm1haW5oZWFkZXInKS5hZGRDbGFzcygnaGFzLXN0aWNreScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0U1RJQ0tZX0hFQURFUlxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnaXMtc3RpY2t5Jylcblx0XHRcdFx0XHQucGFyZW50cygnLm1haW5oZWFkZXInKS5yZW1vdmVDbGFzcygnaGFzLXN0aWNreScpO1xuXHRcdFx0fVxuXHRcdH0pO1xuICB9XG5cdFxuICAvLyBUYWJzXG4gIHZhciBNRU5VX1RBQlMgPSAkKCdbZGF0YS1tZW51LXRhYnNdJyk7XG4gIHZhciBNRU5VX1RBUkdFVFMgPSAkKCdbZGF0YS1tZW51LXRhYnMtdGFyZ2V0XScpO1xuXG4gIGlmIChNRU5VX1RBQlMubGVuZ3RoKSB7XG4gICAgTUVOVV9UQUJTLmZpbmQoJ2EnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBNRU5VX1RBUkdFVFMucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICBNRU5VX1RBQlMuZmluZCgnYScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB2YXIgdGFyZ2V0RWxJRCA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICAgICAgICAkKHRhcmdldEVsSUQpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbn0pO1xuXG4iXX0=
