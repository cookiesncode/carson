$(function () {
	
	$('#ball').jflickrfeed({
		qstrings: {
			id: '120064813@N04',
			photoset_id: '72157642213569784',
			api_key : '28835edb19ca1794992ed28b281be366'
		},
		itemTemplate: '<a class="th radius" href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a>'
	});
	$('#alphaco').jflickrfeed({
		qstrings: {
			id: '120064813@N04',
			photoset_id: '72157642212734173',
			api_key : '28835edb19ca1794992ed28b281be366'
		},
		itemTemplate: '<a class="th radius" href="{{image_b}}"><img src="{{image_q}}" alt="{{title}}" /></a></li>'
	});
	
}); // end document.ready()
