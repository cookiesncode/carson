$(function () {
	var $loadtext = $('<p id="load-text">Loading images from Flickr...</p>');
	$('.gallery').append($loadtext);
	
	$('#gallery-events').jflickrfeed({
		qstrings: {
			id: '120064813@N04',
			photoset_id: '72157642209082125'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#gallery-ball').jflickrfeed({
		qstrings: {
			id: '120064813@N04',
			photoset_id: '72157642213569784'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#gallery-ftx').jflickrfeed({
		qstrings: {
			id: '120064813@N04',
			photoset_id: '72157642212452043'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#gallery-alpha').jflickrfeed({
		qstrings: {
			id: '120064813@N04',
			photoset_id: '72157642212734173'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#gallery-438').jflickrfeed({
		qstrings: {
			id: '120064813@N04',
			photoset_id: '72157642212734123'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#gallery-223').jflickrfeed({
		qstrings: {
			id: '120064813@N04',
			photoset_id: '72157642212734103'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#gallery-2fst').jflickrfeed({
		qstrings: {
			id: '120064813@N04',
			photoset_id: '72157642212734043'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#gallery-hhd').jflickrfeed({
		qstrings: {
			id: '120064813@N04',
			photoset_id: '72157642212452063'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
	}, function (data) {
		$('#load-text').remove();
	});
	
	$('#gallery-bravo').jflickrfeed({
		qstrings: {
			id: '120064813@N04',
			photoset_id: '72157642212452013'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
	}, function (data) {
		$('#load-text').remove();
	});
	
}); // end document.ready()
