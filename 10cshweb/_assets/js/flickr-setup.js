//@prepros-append ./fortcarson-2014/includes/js/plugins/blueimp-gallery.min.js

$(function () {
	var $loadtext = $('<p id="load-text">Loading images from Flickr...</p>');
	var flickr_id = '120064813@N04';
	var flickr_method = 'flickr.photosets.getPhotos';
	var flickr_limit = 50;
	$('.gallery').append($loadtext);

	// this is for the 10th CSH home page recent galleries seciton
	$('#ball').jflickrfeed({
		limit: 1,
		qstrings: {
			method: flickr_method,
			id: flickr_id,
			photoset_id: '72157642213569784'
		},
		itemTemplate: '<a class="th radius" href="galleries/hospital-balls.html"><img src="{{image_q}}" alt="{{title}}" /></a>'
	}, function (data) {
		$('#load-text').remove();
	});
		
	$('#ftx').jflickrfeed({
		limit: 1,
		qstrings: {
			method: flickr_method,
			id: flickr_id,
			photoset_id: '72157642212452043'
		},
		itemTemplate: '<a class="th radius" href="galleries/hospital-ftx.html"><img src="{{image_q}}" alt="{{title}}" /></a>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#events').jflickrfeed({
		limit: 1,
		qstrings: {
			method: flickr_method,
			id: flickr_id,
			photoset_id: '72157642209082125'
		},
		itemTemplate: '<a class="th radius" href="galleries/hospital-events.html"><img src="{{image_q}}" alt="{{title}}" /></a>'
	}, function (data) {
		$('#load-text').remove();
	});
	
// This is for the individual gallery pages	
	$('#gallery-events').jflickrfeed({
		limit: flickr_limit,
		qstrings: {
			method: flickr_method,
			id: flickr_id,
			photoset_id: '72157642209082125'
		},
		itemTemplate: '<a class="th radius" data-gallery="events" href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#ball-gallery').jflickrfeed({
		limit: flickr_limit,
		qstrings: {
			method: 'flickr.photosets.getPhotos',
			id: flickr_id,
			photoset_id: '72157642213569784'
		},
		itemTemplate: '<a class="th radius" data-gallery="ball" href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a>'
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
		itemTemplate: '<a class="th radius" data-gallery="ftx" href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a>'
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
		itemTemplate: '<a class="th radius" data-gallery="unit-alpha" href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
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
		itemTemplate: '<a class="th radius" data-gallery="unit-438" href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
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
		itemTemplate: '<a class="th radius" data-gallery="unit-223" href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
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
		itemTemplate: '<a class="th radius" data-gallery="unit-2fst" href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
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
		itemTemplate: '<a class="th radius" data-gallery="unit-hhd" href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
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
		itemTemplate: '<a class="th radius" data-gallery="unit-bravo href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
	}, function (data) {
		$('#load-text').remove();
	});
	
}); // end document.ready()
