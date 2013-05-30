// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
	'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
	'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
	'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
	'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

// Place any jQuery/helper plugins in here.

(function($) {
	$.fn.cycle = function() {
		var j = 0;
		var jmax = this.find("li").length -1;
		var $this = this;
		function cycleNext() {
			$this.find('.visible').removeClass('visible')
			.end().find('li:eq(' + j + ')').addClass('visible');
			(j == jmax) ? j=0 : j++;
		};	
		cycleNext();
		$(document).on('click', '.cycleNext', function(event) {
			event.preventDefault();
			cycleNext();
		});
		return this;
	}
})(jQuery);

jQuery(function($) {

  $('.haiku-cycle').cycle();
	
	
});