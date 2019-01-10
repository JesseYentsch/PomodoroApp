
var minutes=1;
var seconds=10;
var restMinutes;
var restSeconds;
var timer="";
var timerValue=true;
var session=document.getElementById('session');
var button=document.getElementById('button');
var timerInterval=document.getElementById('timerInterval');
var increaseWorkInterval=document.getElementById('workInterval');
var innerMinutes=document.getElementById('innerMinutes');
var workInterval=document.getElementById('workInterval');


document.addEventListener('DOMContentLoaded',function(){
    innerMinutes.innerHTML= minutes + "Work Minutes";
    button.addEventListener('click',buttonClock)
    workInterval.addEventListener('click' ,incrementWorkMinutes)
    resetButton.addEventListener('click', function(){
        minutes=24;
        seconds=60;
        timerInterval.innerHTML= minutes + ":" + seconds;
        stopButton.click();
    });
});
function incrementWorkMinutes(){
    minutes++;
    innerMinutes.innerHTML= minutes + "Work Minutes";
}
function buttonClock(){
    if(timerValue==true){
        timer=setInterval(secondClock,1000);
        timerValue=false;
        session.innerHTML="Stop!";
    }
    else {
        clearInterval(timer);
        timerValue=true;
        session.innerHTML="Start!";
    }

} 

function secondClock(){
    timerInterval.innerHTML=  + minutes + ":" + seconds--;
    if(seconds==-1){
        minutes--;
        if(minutes==-1 && seconds==-1){
            minutes=24;
            clearInterval(timer);
        }
        seconds=60;
    }
   
}






