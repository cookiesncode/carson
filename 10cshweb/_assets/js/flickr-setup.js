$(function () {
	var $loadtext = $('<p id="load-text">Loading images from Flickr...</p>');
	var flickr_id = '120064813@N04';
	var flickr_method = 'flickr.photosets.getPhotos';
	var flickr_limit = 50;
	$('.gallery').append($loadtext);
	
	$('#gallery-events').jflickrfeed({
		limit: flickr_limit,
		qstrings: {
			method: flickr_method,
			id: flickr_id,
			photoset_id: '72157642209082125'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#gallery-ball').jflickrfeed({
		limit: 50,
		qstrings: {
			method: 'flickr.photosets.getPhotos',
			id: flickr_id,
			photoset_id: '72157642213569784'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#gallery-ftx').jflickrfeed({
		limit: flickr_limit,
		qstrings: {
			method: flickr_method,
			id: flickr_id,
			photoset_id: '72157642212452043'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#gallery-alpha').jflickrfeed({
		limit: flickr_limit,
		qstrings: {
			method: flickr_method,
			id: flickr_id,
			photoset_id: '72157642212734173'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#gallery-438').jflickrfeed({
		limit: flickr_limit,
		qstrings: {
			method: flickr_method,
			id: flickr_id,
			photoset_id: '72157642212734123'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#gallery-223').jflickrfeed({
		limit: flickr_limit,
		qstrings: {
			method: flickr_method,
			id: flickr_id,
			photoset_id: '72157642212734103'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#gallery-2fst').jflickrfeed({
		limit: flickr_limit,
		qstrings: {
			method: flickr_method,
			id: flickr_id,
			photoset_id: '72157642212734043'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#gallery-hhd').jflickrfeed({
		limit: flickr_limit,
		qstrings: {
			method: flickr_method,
			id: flickr_id,
			photoset_id: '72157642212452063'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#gallery-bravo').jflickrfeed({
		limit: flickr_limit,
		qstrings: {
			method: flickr_method,
			id: flickr_id,
			photoset_id: '72157642212452013'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
	}, function (data) {
		$('#load-text').remove();
	});
	
}); // end document.ready()
