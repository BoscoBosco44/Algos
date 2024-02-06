// var eventsText = "Events: Lunch (2024-01-31T13:00:00-06:00)Coding Dojo Lecture (2024-01-31T15:00:00-06:00)Gym (2024-01-31T17:30:00-06:00)Coding Dojo Class (2024-02-01T10:00:00-06:00)Lunch (2024-02-01T13:00:00-06:00)Coding Dojo Lecture (2024-02-01T15:00:00-06:00)Gym (2024-02-01T17:30:00-06:00)Coding Dojo Class (2024-02-02T10:00:00-06:00)Lunch (2024-02-02T13:00:00-06:00)Coding Dojo Lecture (2024-02-02T15:00:00-06:00)";


// var eventsArray = [];
// // for(var i = 0; i < 11; i++) {
// //     eventsArray[i] = "    " + eventsText.split(")", 10);

// // }
// // console.log("eventsArray = " + eventsArray);
// console.log(eventsText.split(")", 10));


var dateNstuff = "2024-02-02T13:00:00-06:00 - 2024-02-02T14:00:00-06:00";

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function getAndFormatTime(str) {
    var startTime = str.slice(11, 16);
    // var startTimeHour = startTime.slice(0, 2);
    var startTimeHour = parseInt(startTime);
    // console.log("startTimeHour = " + startTimeHour);

    var endTime = str.slice(39, 44);

    console.log(startTime);
    console.log("et = " + endTime);

    // ------------------------------------------------------ Convert From Military time
    if(startTimeHour > 12) {
        startTime = (startTime.slice(0, 2) - 12) + startTime.slice(2, 5);
        console.log("starTimeOut = " + startTime);//[parseInt(startTime.slice(0, 1)) - 12] + ":ll" + startTime.slice(2, 5));
    }
    if(endTime.slice(0, 2) > 12) {
        endTime = (endTime.slice(0, 2) - 12) + endTime.slice(2, 5);
        console.log("endTimeOut = " + endTime);
    }

    return(startTime + " - " + endTime);
}

console.log("functionOut = " + getAndFormatTime(dateNstuff));
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// var dateNstuff = "2024-02-02T13:00:00-06:00 - 2024-02-02T14:00:00-06:00";

// function convertMonthToAbv(str) {
//     if(str == "01") 
//         {  return "Jan";  }
//     if(str == "02") 
//         {  return "Feb";  }
//     if(str == "03") 
//         {  return "Mar";  }
//     if(str == "04") 
//         {  return "Apr";  }
//     if(str == "05") 
//         {  return "May";  }
//     if(str == "06") 
//         {  return "Jun";  }
//     if(str == "07") 
//         {  return "Jly";  }
//     if(str == "08") 
//         {  return "Aug";  }
//     if(str == "09") 
//         {  return "Sep";  }
//     if(str == "10") 
//         {  return "Oct";  }
//     if(str == "11") 
//         {  return "Nov";  }
//     if(str == "12") 
//         {  return "Dec";  }
// }

// function getDate(str) {
//     var date = str.slice(0, 10);
//     var year = date.slice(0, 4);
//     var month = date.slice(5, 7);
//     var day = date.slice(8, 10);

//     console.log(date);
//     console.log("year = " + year);
//     console.log("month = " + month);
//     console.log("day = " + day);

//     var arr = [convertMonthToAbv(month), day, year];

//     return arr; //convertMonthToAbv(month) + " " + day + " " + year;
// }

// console.log(getDate(dateNstuff));