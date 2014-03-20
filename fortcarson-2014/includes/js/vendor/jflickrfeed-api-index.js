/*
* Copyright (C) 2009 Joel Sutherland
* Licenced under the MIT license
* http://www.newmediacampaigns.com/page/jquery-flickr-plugin
*
* Available tags for templates:
* title, link, date_taken, description, published, author, author_id, tags, image*
*/

// Miguel's custom mods added. look for "MOD"
(function($) {
	$.fn.jflickrfeed = function(settings, callback) {
		settings = $.extend(true, {		
			flickrbase: 'http://api.flickr.com/services/rest/',// MOD
			feedapi: '',// MOD
			limit: 50, // MOD
			qstrings: {
				method: 'flickr.people.getPublicPhotos',
				api_key : '28835edb19ca1794992ed28b281be366',
				format: 'json',
				nojsoncallback: 1
			},
			cleanDescription: true,
			useTemplate: true,
			itemTemplate: '',
			itemCallback: function(){}
		}, settings);

		var url = settings.flickrbase + settings.feedapi + '?';
		var first = true;

		for(var key in settings.qstrings){
			if(!first)
				url += '&';
			url += key + '=' + settings.qstrings[key];
			first = false;
		}

		return $(this).each(function(){
			debugger;
			var $container = $(this);
			var container = this;
			$.getJSON(url, function(data){
				$.each(data.photos.photo, function(i,item){ //MOD
					if(i < settings.limit){
					
						// Clean out the Flickr Description
						if(settings.cleanDescription){
							var regex = /<p>(.*?)<\/p>/g;
							var input = item.description;
							if(regex.test(input)) {
								item.description = input.match(regex)[2]
								if(item.description!=undefined)
									item.description = item.description.replace('<p>','').replace('</p>','');
							}
						}
						
						// Add Image Sizes
						// MOD URL is different for rest api
						item['image'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg';
						item['image_s'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_s.jpg';
						item['image_q'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_q.jpg';
						item['image_t'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_t.jpg';
						item['image_m'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';
						item['image_b'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_b.jpg';

						// Use Template
						if(settings.useTemplate){
							var template = settings.itemTemplate;
							for(var key in item){
								var rgx = new RegExp('{{' + key + '}}', 'g');
								template = template.replace(rgx, item[key]);
							}
							$container.append(template)
						}
						
						//itemCallback
						settings.itemCallback.call(container, item);
					}
				});
				if($.isFunction(callback)){
					callback.call(container, data);
				}
			});
		});
	}
})(jQuery);