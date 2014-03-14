$.ajax({
  url      : document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent('http://carspublic.carson.army.mil/eoc/_layouts/listfeed.aspx?List=%7B9D488546%2D799B%2D41E2%2DB0F9%2D2DE12295173A%7D'),
  dataType : 'json',
  success  : function (data) {
    if (data.responseData.feed && data.responseData.feed.entries) {
      $.each(data.responseData.feed.entries, function (i, e) {
                  
        var stuff = e.content;

          $('#roads').append(stuff);
          $('#report').append(stuff);
          
          $("#roads :contains(Green)").attr('id', 'green');
          $("#roads :contains(Amber)").attr('id', 'amber');
          $("#roads :contains(Red)").attr('id', 'red');
          $("#roads :contains(Reporting)").remove();

          $("#report :contains(Green)").attr('id', 'green');
          $("#report :contains(White)").attr('id', 'white');
          $("#report :contains(Red)").attr('id', 'red');
          $("#report :contains(Road)").remove();
          
          var red_1 = $("#roads").text();
          var red_2 = $("#report").text();
          var n = red_1.indexOf("Green");
          var m = red_2.indexOf("Green");
          if (n == -1 | m == -1) {
              $('#desc-text').append(e.title);
          }
      });
    }

  }
});