(function( $ ) {
	$.fn.borderSlider = function(options) {
		console.log(1);
		var settings = $.extend({
	      'element' : ''
	    }, options);

		return this.each(function() {

		    var navElement = $(this).children("li"),
		    	fisrtNavElementW = $(this).children("li").eq(0).width(),
		    	sliderLine = $(settings.element);

		    sliderLine.css({
		    	"transition" : ".3s ease-in-out",
		    	"position" : "absolute",
		    	"bottom" : "4px",

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