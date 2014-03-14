jQuery(document).ready(function($) {
        $.ajax({
          url : "http://api.wunderground.com/api/2fe438592973ec9d/astronomy/conditions/forecast10day/pws:0/q/zip:80913.json",
          dataType : "jsonp",
          success : function(parsed_json) {
              var w = parsed_json.current_observation;
              var t = '<tr><td colspan="2"><img src="' + w.icon_url + '" />' + ' ' + w.weather + ' ' + w.temp_f + ' &deg;F' + '</td></tr>' + '<tr><td class="label">Wind Chill:</td><td>' + w.windchill_string + '</td></tr>' + '<tr><td class="label">UV:</td><td>' + w.UV + '</td></tr>' + '<tr><td class="label">Wind:</td><td>' + w.wind_string + '</td></tr>' + '<tr><td class="label">Precipitation:</td><td>' + w.precip_today_string + '</td></tr>' + '<tr><td class="label">Relative Humidity:</td><td>' + w.relative_humidity + '</td></tr>';
              
              $("#current").append(t);
              
              $(parsed_json.forecast.simpleforecast.forecastday).each(function( i, l ) {
              
                  var s = '<tr> <td>' + l.date.weekday + ' ' + l.date.day + ' ' + l.date.monthname + '</td>' + '<td>' + '<img src="' + l.icon_url + '" />' + ' ' + l.conditions + '</td>' + '<td>' + l.high.fahrenheit + ' &deg;F' + '</td>' + '<td>' + l.low.fahrenheit + ' &deg;F' + '</td>' + '<td>' + l.pop + '%' + '</td></tr>';
                  $("#stuff").append(s);
              });
              
              

                }
        });
});