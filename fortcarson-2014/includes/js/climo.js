var d=new Date();
var month=new Array();
var y = d.getFullYear();
month[0]="Jan";
month[1]="Feb";
month[2]="Mar";
month[3]="Apr";
month[4]="May";
month[5]="Jun";
month[6]="Jul";
month[7]="Aug";
month[8]="Sep";
month[9]="Oct";
month[10]="Nov";
month[11]="Dec";
var n = month[d.getMonth()];
$('#climo').append('<img src="http://carspublic.carson.army.mil/SWO/Shared%20Documents/' + n + '-' + y + '.PNG" />');