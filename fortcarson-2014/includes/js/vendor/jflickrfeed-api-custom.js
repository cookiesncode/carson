
(function($){
	
	$.fn.jflickrfeed = function (settings, callback) {

		settings = $.extend(true, {

			flickrbase: 'http://api.flickr.com/services/rest/',
			feedapi: '',
			limit: 20,
			qstrings: {
				method: 'flickr.people.getPublicPhotos',
				api_key: '28835edb19ca1794992ed28b281be366',
				format: 'json',
				nojsoncallback: 1,
				extras: 'url_z'
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
				
				$.each(data.photos.photo, function (i, item) {

					var size_desired = item.height_z < item.width_z;
					var not_blocked = item.farm != 4;

					if (i < settings.limit && not_blocked && size_desired) {

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
					}
				}); // end .each()
				
				if ($.isFunction(callback)) {

					callback.call(container, data);
				};
			}); // end getJSON
		});// end .each()
		
	};// end $.fn.jflickrfeed

})(jQuery);