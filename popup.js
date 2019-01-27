

var minutes=24;
var seconds=59;

var workMinutes=24
var workSeconds=59
var restMinutes=Math.floor(minutes/5);
var restSeconds=59;


var timer="";
var restTimer="";
var timerValue=true;

var button=document.getElementById('timerButton');
var timerInterval=document.getElementById('timerInterval');
var innerMinutes=document.getElementById('innerMinutes');
var port=chrome.extension.connect({
    name:"Sample Communication"
    
});

var timeSpentObj={
    min:0,
    sec:0
};


document.addEventListener('DOMContentLoaded',function(){
    var increaseWorkInterval=document.getElementById('incWorkInterval');
    var decreaseWorkInterval=document.getElementById('decWorkInterval');
    innerMinutes.innerHTML= minutes + " minutes";
    button.addEventListener('click',buttonWorkClock);
    increaseWorkInterval.addEventListener('click' ,incrementWorkMinutes);
    decreaseWorkInterval.addEventListener('click', decrementWorkMinutes)
    resetButton.addEventListener('click', reset);
    
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
    timeSpentObj.sec++
    if(workSeconds==-1){
        workMinutes--;
        timeSpentObj.min++;
        timeSpentObj.sec=0;
        if(workMinutes==-1 && workSeconds==-1){
            clearInterval(timer);
            workMinutes=minutes;
            buttonRestClock()
        }
        workSeconds=seconds;
    }
    port.postMessage(timeSpentObj);
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






