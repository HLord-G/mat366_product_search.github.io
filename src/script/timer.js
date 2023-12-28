


let hour = 0;
let minutes = 2;
let seconds = 0;


function timerset(initialHours, initialMinutes, initialSeconds) {
    hour    = initialHours
    minutes = initialMinutes
    seconds = initialSeconds

    timerdisplay();
    setInterval(updateTimer, 1000);
}



function updateTimer(){
    if (hour === 0 && minutes === 0 && seconds === 0) {
        console.log("timer is up")
    }else{
        if (seconds === 0) {
            
          if (minutes === 0) {
             hour--;
             minutes = 59
          }else{
            minutes--;
          }

          seconds = 59
        } else{
            seconds--;
        }
        timerdisplay()
    }
}




function timerdisplay(){
    console.log(`Time remaining: ${hour}Hours(s) ${minutes}Minute(s) ${seconds}second(s)`)
}

timerset(0,2,0)