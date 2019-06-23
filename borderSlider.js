/**
 * Borderslider v1.0.1
 * Copyright 2019 Maxim Pikulin
 * Licensed under: SEE LICENSE IN https://github.com/marxpekulen/Borderslider/blob/master/LICENSE
 */

(function( $ ) {
	$.fn.borderSlider = function(options) {

		var settings = $.extend({
	      'line' : '.navbar-line',
	      'height' : '4px',
	      'backgroundColor' : 'red',
	      'transition' : '.3s ease-in-out'
	    }, options);

		return this.each(function() {

		    var navElement = $(this).children("li"),
		    	fisrtNavElementW = $(this).children("li").eq(0).width(),
		    	sliderLine = $(settings.line);

		    sliderLine.css({
		    	"transition" : settings.transition,
		    	"position" : "absolute",
		    	"bottom" : "0",
		    	"height" : settings.height,
		    	"position" : "absolute",
		    	"background-color" : settings.backgroundColor

		    });

		    navElement.hover(function () {
		    	var thisW = $(this).width(),
		    		thisPosLeft = $(this).position().left;
		    	sliderLine.css({
		    		"width" : thisW,
		    		"transform" : "translateX("+thisPosLeft+"px)"
		    	});
		    });

		    navElement.parent().mouseout(function () {
		    	sliderLine.css({
		    		"width" : 0,
		   		});
		    });
		});

	};
})(jQuery);