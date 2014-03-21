
(function($){
	
	$.fn.jflickrfeed = function (settings, callback) {
		settings = $.extend(true, {
			flickrbase: 'http://api.flickr.com/services/rest/',
			feedapi: '',
			limit: 50,
			qstrings: {
				method: 'flickr.people.getPublicPhotos',
				api_key: '28835edb19ca1794992ed28b281be366',
				format: 'json',
				nojsoncallback: 0,
				extras: 'url_z'
			},
			cleanDescription: true,
			useTemplate: true,
			itemTemplate: '',
			itemCallback: function() {}
		}, settings);	
		
		var url = settings.flickrbase +	settings.feedapi +'?';
		var is_first = true;
		
		for (var key in settings.qstrings) {
			if (!is_first) {
				url += '&';
				url += key + '=' + settings.qstrings[key];
				is_first = false;
			}
		}
		return $(this).each(function () {
			var $container = $(this);
			var container = this;
			
			// start here miguel
		});// end .each()
		
	};// end $.fn.jflickrfeed

})(jQuery);