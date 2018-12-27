var timerInterval=document.getElementById('timerInterval');
var minutes=1;
var seconds=10;
var background=chrome.extension.getBackgroundPage();
var startButton=document.getElementById('startButton');
var stopButton=document.getElementById('stopButton');
var timer="";
document.addEventListener('DOMContentLoaded',function(){

    startButton.addEventListener('click',function(){
        timer=setInterval(secondClock,1000);
    });
    stopButton.addEventListener('click', function(){
        clearInterval(timer);
    });
    resetButton.addEventListener('click', function(){
        minutes=24;
        seconds=60;
        timerInterval.innerHTML="Minutes: " + background.minutes + " Seconds: " + background.seconds;
    });
   
});
function secondClock(){
    timerInterval.innerHTML="Minutes: " + minutes + " Seconds: " + seconds--;
    if(seconds==-1){
        minutes--;
        if(minutes==-1 && seconds==-1){
            minutes=24;
            clearInterval(timer);
        }
        seconds=60;
    }
}




