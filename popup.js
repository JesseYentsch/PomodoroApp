
const defaultMinutes=24;
const defaultSeconds=59;
const defaultRestMinutes=4;
const defaultRestSeconds=59;

var minutes=0;
var seconds=10;

var workMinutes=0
var workSeconds=10
var restMinutes=0;
var restSeconds=15;
var timer="";
var restTimer="";
var timerValue=true;
var session=document.getElementById('session');
var button=document.getElementById('button');
var timerInterval=document.getElementById('timerInterval');
var increaseWorkInterval=document.getElementById('workInterval');
var innerMinutes=document.getElementById('innerMinutes');
var workInterval=document.getElementById('workInterval');


document.addEventListener('DOMContentLoaded',function(){
    innerMinutes.innerHTML= minutes + "Work Minutes";
    button.addEventListener('click',buttonClickClock)
    workInterval.addEventListener('click' ,incrementWorkMinutes)
    resetButton.addEventListener('click', function(){
        minutes=24;
        seconds=60;
        timerInterval.innerHTML= minutes + ":" + seconds;
        stopButton.click();
    });
});

//Increments the amount of "work" minutes
function incrementWorkMinutes(){
    workMinutes=minutes++;
    innerMinutes.innerHTML= workMinutes + "Work Minutes";
}
function decrementWorkMinutes(){
    workMinutes=minutes--;
    innerMinutes.innerHTML= workMinutes + "Work Minutes";
}

//Functionality of the stop/start button
function buttonClickClock(){
    if(timerValue==true){
        timer=setInterval(workClock,1000);
        timerValue=false;
        session.innerHTML="Stop!";
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
    if(workSec==-1){
        workMin--;
        if(workMinutes==-1 && workSeconds==-1){
            workMinutes=minutes;
            clearInterval(timer);
            buttonRestClock()
        }
        workSeconds=seconds;
    }
}





function buttonRestClock(){
    restTimer=setInterval(restClock, 1000);
}



function restClock(){
    timerInterval.innerHTML= restMinutes + ":" + restSeconds--;
    if(restSeconds==-1){
        restMinutes--;
        if(restMinutes==-1 && restSeconds==-1){
            clearInterval(restTimer);
            buttonClickClock();
        }
    }
}






