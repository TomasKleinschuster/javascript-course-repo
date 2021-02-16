var manyHours = 0;
        
function ValidateForm(){
    var radioButtons = document.getElementsByName("timezone");
    var radioButtonValue = radioButtons[0].value;
    for (var i = 0; i < radioButtons.length; i++){
        if (radioButtons[i].checked == true){
        radioButtonValue = radioButtons[i].value;
        }
    }

    switch(radioButtonValue){
        case "HAST":
            manyHours = -7;
            break;
        case "AST":
            manyHours = -6;
            break;
        case "PST":
            manyHours = -5;
            break;
        case "MST":
            manyHours = -4;
            break;
        case "CST":
            manyHours = -3;
            break;
        case "EST":
            manyHours = -2;
            break;
        default:
            manyHours = 0;
    }

    document.getElementById("result").innerHTML = radioButtonValue;
}

function Time(){
    var day = new Date();
    var currentHour = day.getHours() + manyHours;
    var currentMinute = day.getMinutes();
    var currentSecond = day.getSeconds();
    var currentSession = 0;
            
    if (currentHour <= 12){
        currentSession = "AM"
    } else {
        currentSession = "PM"
    }

    currentHour = currentHour % 12;
            
    var currentTime = currentHour + ":" + currentMinute + ":" + currentSecond + " " + currentSession;
            
    setTimeout(Time, 10);

    document.getElementById("clock").innerHTML = currentTime;

}

Time();

