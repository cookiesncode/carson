jQuery(document).ready(function($) {
	$.ajax({
	  url : "http://api.wunderground.com/api/2fe438592973ec9d/geolookup/conditions/pws:0/q/zip:80913.json",
	  dataType : "jsonp",
	  success : function(parsed_json) {
	    var location = parsed_json['location']['city'];
	    var temp_f = parsed_json['current_observation']['temp_f'];

	    if (temp_f >=90) {
	    	var color = "black";
	    } else if (temp_f >=88 && temp_f<=89.9) {
	    	var color = "red";
	    } else if (temp_f >=85 && temp_f<=87.9) {
	    	var color = "amber";
	    } else if (temp_f >=82 && temp_f<=84.9) {
	    	var color = "green";
	    } else if (temp_f >=78 && temp_f<=81.9) {
	    	var color = "white";
	    } else if (temp_f <=78) {
	    	var color = "gray";
	    };

	    // Append the li
	    $("#weather").append('<p id="' + color + '"><strong>Temperature:</strong> ' + temp_f + '&deg;F</p>');
	    $("#mid-weather").append('<p id="' + color + '"><strong>Temperature:</strong> ' + temp_f + '&deg;F</p>');
	    console.log(color);
	  }
	});
});