(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0NBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVzs7QUFFM0IsSUFBRSxnQkFBRixFQUFvQixLQUFwQixDQUEwQjtBQUN4QixVQUFNLElBQU47QUFDQSxZQUFRLEtBQVI7QUFDQSxjQUFVLElBQVY7QUFDQSxXQUFPLEdBQVA7QUFDQSxVQUFNLElBQU47QUFDQSxhQUFTLFFBQVQ7R0FORjs7O0FBRjJCLE1BWXZCLGdCQUFnQixFQUFFLHNCQUFGLENBQWhCLENBWnVCO0FBYTNCLE1BQUksdUJBQXVCLGNBQWMsV0FBZCxFQUF2QixDQWJ1Qjs7QUFlM0IsTUFBSSxjQUFjLE1BQWQsRUFBc0I7QUFDMUIsTUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFXO0FBQzNCLFVBQUksRUFBRSxJQUFGLEVBQVEsU0FBUixNQUF1QixvQkFBdkIsRUFBNkM7QUFDaEQsc0JBQ0UsUUFERixDQUNXLFdBRFgsRUFEZ0Q7QUFHaEQsc0JBQWMsT0FBZCxDQUFzQixhQUF0QixFQUFxQyxRQUFyQyxDQUE4QyxZQUE5QyxFQUhnRDtPQUFqRCxNQUlPO0FBQ04sc0JBQ0UsV0FERixDQUNjLFdBRGQsRUFFRSxPQUZGLENBRVUsYUFGVixFQUV5QixXQUZ6QixDQUVxQyxZQUZyQyxFQURNO09BSlA7S0FEZ0IsQ0FBakIsQ0FEMEI7R0FBMUI7OztBQWYyQixNQThCdkIsWUFBWSxFQUFFLGtCQUFGLENBQVosQ0E5QnVCO0FBK0IzQixNQUFJLGVBQWUsRUFBRSx5QkFBRixDQUFmLENBL0J1Qjs7QUFpQzNCLE1BQUksVUFBVSxNQUFWLEVBQWtCO0FBQ3BCLGNBQVUsSUFBVixDQUFlLEdBQWYsRUFBb0IsSUFBcEIsQ0FBeUIsWUFBVztBQUNsQyxRQUFFLElBQUYsRUFBUSxFQUFSLENBQVcsT0FBWCxFQUFvQixVQUFTLEtBQVQsRUFBZ0I7QUFDbEMsY0FBTSxjQUFOLEdBRGtDO0FBRWxDLHFCQUFhLFdBQWIsQ0FBeUIsV0FBekIsRUFGa0M7QUFHbEMsa0JBQVUsSUFBVixDQUFlLEdBQWYsRUFBb0IsV0FBcEIsQ0FBZ0MsV0FBaEMsRUFIa0M7O0FBS2xDLFVBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsV0FBakIsRUFMa0M7QUFNbEMsWUFBSSxhQUFhLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxNQUFiLENBQWIsQ0FOOEI7QUFPbEMsVUFBRSxVQUFGLEVBQWMsUUFBZCxDQUF1QixXQUF2QixFQVBrQztPQUFoQixDQUFwQixDQURrQztLQUFYLENBQXpCLENBRG9CO0dBQXRCO0NBakNnQixDQUFsQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiBqc2hpbnQgZGV2ZWw6dHJ1ZSAqL1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIC8vIEluaXQgU2xpY2sgb24gaGVhZGVyIG9uIGhvbWVwYWdlLiBcbiAgJCgnLmNhcm91c2VsLXNob3AnKS5zbGljayh7XG4gICAgZG90czogdHJ1ZSxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgZmFkZTogdHJ1ZSxcbiAgICBjc3NFYXNlOiAnbGluZWFyJ1xuICB9KTtcblxuICAvLyBTdGlja3kgaGVhZGVyXG4gIHZhciBTVElDS1lfSEVBREVSID0gJCgnW2RhdGEtaGVhZGVyLXN0aWNreV0nKTtcbiAgdmFyIFNUSUNLWV9IRUFERVJfSEVJR0hUID0gU1RJQ0tZX0hFQURFUi5vdXRlckhlaWdodCgpO1xuXG4gIGlmIChTVElDS1lfSEVBREVSLmxlbmd0aCkge1xuXHRcdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+PSBTVElDS1lfSEVBREVSX0hFSUdIVCkge1xuXHRcdFx0XHRTVElDS1lfSEVBREVSXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdpcy1zdGlja3knKTtcblx0XHRcdFx0U1RJQ0tZX0hFQURFUi5wYXJlbnRzKCcubWFpbmhlYWRlcicpLmFkZENsYXNzKCdoYXMtc3RpY2t5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRTVElDS1lfSEVBREVSXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdpcy1zdGlja3knKVxuXHRcdFx0XHRcdC5wYXJlbnRzKCcubWFpbmhlYWRlcicpLnJlbW92ZUNsYXNzKCdoYXMtc3RpY2t5Jyk7XG5cdFx0XHR9XG5cdFx0fSk7XG4gIH1cblx0XG4gIC8vIFRhYnNcbiAgdmFyIE1FTlVfVEFCUyA9ICQoJ1tkYXRhLW1lbnUtdGFic10nKTtcbiAgdmFyIE1FTlVfVEFSR0VUUyA9ICQoJ1tkYXRhLW1lbnUtdGFicy10YXJnZXRdJyk7XG5cbiAgaWYgKE1FTlVfVEFCUy5sZW5ndGgpIHtcbiAgICBNRU5VX1RBQlMuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIE1FTlVfVEFSR0VUUy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIE1FTlVfVEFCUy5maW5kKCdhJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICBcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIHZhciB0YXJnZXRFbElEID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICQodGFyZ2V0RWxJRCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxufSk7XG5cbiJdfQ==
