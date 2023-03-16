
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){
		
        var d 	= new Date();
        var mth = d.getMonth()+1;
        var yr 	= d.getFullYear();

        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar (mth, yr);

        $("#month,#year").change(function(e) {
            showCalendar ($("#month").val(), $("#year").val());
        });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar (mth, yr) {
		
		
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();

    /* this is where you'll generate the grid, for now I will just show first day of week */
    var str = "<ul>";
    str += "<li>Number of days in the month: " + numberOfDaysInMonth + "</li>";
    str += "<li>First day of the week: " + firstDayOfWeek + " (" + daysOfTheWeek[firstDayOfWeek] + ")</li>";

    str += "</ul>";

    for(let start = 0; start < firstDayOfWeek; start++){
        count++;
        str += `<div class="empty"></div>`
    }
      
    for(let day=1; day < numberOfDaysInMonth; day++)
    {
        str += `<div class="day`
        if(count & 7 == 0){
            str += ` row">` + (day+1) + `</div>`
            count = 0
        }
        var boxes = document.getElementsByClassName(`day`)
        console.log(boxes)

        for(var x in boxes){
            
        }

    }
    
    $("#results").html(str);
     
    
    
}


