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


//# sourceMappingURL=main.js.map
