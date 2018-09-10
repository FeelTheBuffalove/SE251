const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];   
let colors =    //OBJECT OF COLORS TO COMPARE
    {
        green: 'rgb(0, 128, 0)',    
        red: 'rgb(255, 0, 0)',
        base: 'rgb(255, 255, 255)'
    }



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


function showCalendar (mth, yr) 
{
		
		
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();

    /* this is where you'll generate the grid, for now I will just show first day of week */
    var day = 1;
    var str = '';
    for (var i = 0; (i < numberOfDaysInMonth + firstDayOfWeek); i++)
        {
            str += '<div class="day">';
            if(i >= firstDayOfWeek)
            {
                str += day;
                day++;
            }
            str += '</div>';
        }

    $("#results").html(str); 

    $(".day").on('click', function(e) //ONCLICK LISTENING FOR ANY ELEMENT IN THE DOCUMENT
    {

        if($(this).css("backgroundColor") == colors.green)  //GETS BACKGROUND COLOR AND COMPARES IT TO OBJECT CREATED ABOVE
        {
            $(this).css({"backgroundColor": colors.red});
        }
        else if($(this).css("backgroundColor") == colors.red)
        {
           $(this).css({"backgroundColor": colors.base});
        }
        else
        {
          $(this).css({"backgroundColor": colors.green});
        }
    });

    $("#yes").on('click', function(e) //EVENT LISTENER (ONCLICK)
    {
        $.each($(".day"), function(index, value) //FOR EACH LOOP (GETS ALL ELEMENTS FROM CLASS OF .DAY)
        {
            if($(value).html() != "")   //IF STATEMENT
            {
                $(value).css({'backgroundColor':colors.green}); //CHANGES BACKGROUND COLOR
                
            }
        });
    });

    $("#no").on('click', function(e)
    {
        $.each($(".day"), function(index, value) //FOR EACH LOOP (GETS ALL ELEMENTS FROM CLASS OF .DAY)
        {
            if($(value).html() != "")   //IF STATEMENT
            {
                $(value).css({'backgroundColor':colors.red}); //CHANGES BACKGROUND COLOR
                
            }
        });
    });
}