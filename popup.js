

var minutes=24;
var seconds=59;

var workMinutes=24
var workSeconds=59
var restMinutes=Math.floor(minutes/5);
var restSeconds=59;
var timeSpentSec=0;
var timeSpentMin=0;

var timer="";
var restTimer="";
var timerValue=true;

var button=document.getElementById('timerButton');
var timerInterval=document.getElementById('timerInterval');
var increaseWorkInterval=document.getElementById('incWorkInterval');
var decreaseWorkInterval=document.getElementById('decWorkInterval');
var innerMinutes=document.getElementById('innerMinutes');
var workInterval=document.getElementById('workInterval');


document.addEventListener('DOMContentLoaded',function(){
    innerMinutes.innerHTML= minutes + " minutes";
    button.addEventListener('click',buttonWorkClock);
    increaseWorkInterval.addEventListener('click' ,incrementWorkMinutes);
    decreaseWorkInterval.addEventListener('click', decrementWorkMinutes)
    resetButton.addEventListener('click', reset);
    var port=chrome.extension.connect({
        name:"Sample Communication"
        
    });
    port.postMessage(timeSpentWorking.sec);
    port.onMessage.addListener(function(msg){
        console.log("message recieved " + msg);
    });
    port.onDisconnect.addListener(function(){
        
    });
    
   
});

function reset(){
    workMinutes = minutes;
    workSeconds = seconds;
    restMinutes = Math.floor(minutes / 5);
    restSeconds = 59;
    timerValue = false;
    button.click();
    timerInterval.innerHTML = minutes + ":" + seconds;
}

//Increments the amount of "work" minutes
function incrementWorkMinutes(){
    minutes++;
    workMinutes=minutes;
    workSeconds=59;
    innerMinutes.innerHTML= workMinutes + " minutes";
    timerInterval.innerHTML=   workMinutes + ":" + workSeconds;
    
}
function decrementWorkMinutes(){
    if(minutes!=0){
        minutes--;
        workMinutes=minutes;
        innerMinutes.innerHTML= workMinutes + " minutes";
        timerInterval.innerHTML=   workMinutes + ":" + workSeconds;
    }
}

//Functionality of the stop/start button
function buttonWorkClock(){
    var session=document.getElementById('session');
    if(timerValue==true){
        timer=setInterval(workClock,1000);
        timerValue=false;
        session.innerHTML="Work!";
    }
    else {
        clearInterval(timer);
        timerValue=true;
        session.innerHTML="Start!";
    }

} 

//Function that handles the work clock logic.
function workClock(){
    
    timerInterval.innerHTML=   workMinutes + ":" + workSeconds--;
    timeSpentSec++;
    if(workSeconds==-1){
        workMinutes--;
        timeSpentMin++;
        if(workMinutes==-1 && workSeconds==-1){
            clearInterval(timer);
            workMinutes=minutes;
            buttonRestClock()
        }
        workSeconds=seconds;
    }
    
    
}





function buttonRestClock(){
    restTimer=setInterval(restClock, 1000);
}


//Handles logic of the rest portion timer
function restClock(){
    timerInterval.innerHTML= restMinutes + ":" + restSeconds--;
    if(restSeconds==-1){
        restMinutes--;
        if(restMinutes==-1 && restSeconds==-1){
            clearInterval(restTimer);
            resetButton.click();
        }
    }
}






