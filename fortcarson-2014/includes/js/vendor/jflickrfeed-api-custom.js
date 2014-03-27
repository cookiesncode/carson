
(function($){
	
	$.fn.jflickrfeed = function (settings, callback) {

		settings = $.extend(true, {

			flickrbase: 'http://api.flickr.com/services/rest/',
			feedapi: '',
			qstrings: {
				api_key: '28835edb19ca1794992ed28b281be366',
				format: 'json',
				jsoncallback: '?'
			},
			cleanDescription: true,
			useTemplate: true,
			itemTemplate: '',
			itemCallback: function () {}
		}, settings);
		
		var url = settings.flickrbase +	settings.feedapi +'?';
		var is_first = true;
		
		for (var key in settings.qstrings) {

			if (!is_first) {

				url += '&';
			}

			url += key + '=' + settings.qstrings[key];
			is_first = false;
		}
		return $(this).each(function () {

			var $container = $(this);
			var container = this;

			$.getJSON(url, function (data) {
				var photos;
				var home_page = false;

				// setup which api method you're using
				if (settings.qstrings.method === 'flickr.people.getPublicPhotos') {
					photos = data.photos.photo;
					home_page = true;
				} else if (settings.qstrings.method === 'flickr.photosets.getPhotos') {
					photos = data.photoset.photo;
				}
								
				$.each(photos, function (i, item) {
					// update blocked_items array depending if IA is blocking flickr subdomains again
					var blocked_items = [4];

					if (i > settings.limit) {
						return false;
					}

					if (blocked_items.length >= 1) {
						$.each(blocked_items, function(index, val) {
							if (val === item.farm) {
								return true;
							}
						});
					}

					// Filter photos for the home page Orbit slider
					if (home_page) {
						if (parseInt(item.height_z, 10) > parseInt(item.width_z, 10)) {
							return true;
						}
					}

					if (settings.cleanDescription) {

						var regex = /<p>(.*?)<\/p>/g;
						var input = item.description;

						if (regex.test(input)) {

							item.description = input.match(regex)[2];

							if (item.description !== undefined) {

								item.description = item.description.replace('<p>', '').replace('</p>', '');
							}
						}
					}

					item['image'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg';
					item['image_s'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_s.jpg';
					item['image_q'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_q.jpg';
					item['image_t'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_t.jpg';
					item['image_m'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';
					item['image_z'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_z.jpg';
					item['image_b'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_b.jpg';

					//Use template
					if (settings.useTemplate) {

						var template = settings.itemTemplate;
						for (var key in item) {

							var rgx = new RegExp('{{' + key + '}}', 'g');
							template = template.replace(rgx, item[key]);
						}
						$container.append(template);
					}

					//itemCallback
					settings.itemCallback.call(container, item);
				}); // end .each()
				
				if ($.isFunction(callback)) {

					callback.call(container, data);
				}
			}); // end getJSON
		});// end .each()
		
	};// end $.fn.jflickrfeed

})(jQuery);