$(function () {
	
	$('#ball').jflickrfeed({
		qstrings: {
			id: '120064813@N04',
			photoset_id: '72157642213569784'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a>'
	});
	$('#alphaco').jflickrfeed({
		qstrings: {
			id: '120064813@N04',
			photoset_id: '72157642212734173'
		},
		itemTemplate: '<a class="th radius" data-gallery href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
	});
	
}); // end document.ready()
