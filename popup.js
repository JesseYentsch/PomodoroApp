

document.addEventListener('DOMContentLoaded', function(){
    var startButton=document.getElementById('startButton');
    var stopButton=document.getElementById('stopButton');
    
    stopButton.addEventListener('click', function(){                //Might be a way to refactor these in the future, will be the start/stop buttons for timer
        alert("the Stop button was clicked");
    });
    
    startButton.addEventListener('click',function(){                //""""
        alert("The start button was clicked");
        console.log("The button was clicked");
    }); 
});
