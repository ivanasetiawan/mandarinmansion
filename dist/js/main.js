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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNDQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVc7O0FBRTNCLElBQUUsZ0JBQUYsRUFBb0IsS0FBcEIsQ0FBMEI7QUFDeEIsVUFBTSxJQUFOO0FBQ0EsWUFBUSxLQUFSO0FBQ0EsY0FBVSxJQUFWO0FBQ0EsV0FBTyxHQUFQO0FBQ0EsVUFBTSxJQUFOO0FBQ0EsYUFBUyxRQUFUO0dBTkYsRUFGMkI7O0FBVzNCLE1BQUksZ0JBQWdCLEVBQUUsc0JBQUYsQ0FBaEIsQ0FYdUI7QUFZM0IsTUFBSSx1QkFBdUIsY0FBYyxXQUFkLEVBQXZCLENBWnVCOztBQWMzQixNQUFJLGNBQWMsTUFBZCxFQUFzQjtBQUMxQixNQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQVc7QUFDM0IsVUFBSSxFQUFFLElBQUYsRUFBUSxTQUFSLE1BQXVCLG9CQUF2QixFQUE2QztBQUNoRCxzQkFDRSxRQURGLENBQ1csV0FEWCxFQURnRDtBQUdoRCxzQkFBYyxPQUFkLENBQXNCLGFBQXRCLEVBQXFDLFFBQXJDLENBQThDLFlBQTlDLEVBSGdEO09BQWpELE1BSU87QUFDTixzQkFDRSxXQURGLENBQ2MsV0FEZCxFQUVFLE9BRkYsQ0FFVSxhQUZWLEVBRXlCLFdBRnpCLENBRXFDLFlBRnJDLEVBRE07T0FKUDtLQURnQixDQUFqQixDQUQwQjtHQUExQjtDQWRnQixDQUFsQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiBqc2hpbnQgZGV2ZWw6dHJ1ZSAqL1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIC8vIEluaXQgU2xpY2sgb24gaGVhZGVyIG9uIGhvbWVwYWdlLiBcbiAgJCgnLmNhcm91c2VsLXNob3AnKS5zbGljayh7XG4gICAgZG90czogdHJ1ZSxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgZmFkZTogdHJ1ZSxcbiAgICBjc3NFYXNlOiAnbGluZWFyJ1xuICB9KTtcblxuICB2YXIgU1RJQ0tZX0hFQURFUiA9ICQoJ1tkYXRhLWhlYWRlci1zdGlja3ldJyk7XG4gIHZhciBTVElDS1lfSEVBREVSX0hFSUdIVCA9IFNUSUNLWV9IRUFERVIub3V0ZXJIZWlnaHQoKTtcblxuICBpZiAoU1RJQ0tZX0hFQURFUi5sZW5ndGgpIHtcblx0XHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPj0gU1RJQ0tZX0hFQURFUl9IRUlHSFQpIHtcblx0XHRcdFx0U1RJQ0tZX0hFQURFUlxuXHRcdFx0XHRcdC5hZGRDbGFzcygnaXMtc3RpY2t5Jyk7XG5cdFx0XHRcdFNUSUNLWV9IRUFERVIucGFyZW50cygnLm1haW5oZWFkZXInKS5hZGRDbGFzcygnaGFzLXN0aWNreScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0U1RJQ0tZX0hFQURFUlxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnaXMtc3RpY2t5Jylcblx0XHRcdFx0XHQucGFyZW50cygnLm1haW5oZWFkZXInKS5yZW1vdmVDbGFzcygnaGFzLXN0aWNreScpO1xuXHRcdFx0fVxuXHRcdH0pO1xuICB9XG5cdFxufSk7XG4iXX0=
